// import AdoptionForm from "@/components/adoption-form";
// import FavoritePetButton from "@/components/favorite-pet-button";
// import PetMap from "@/components/pet-map";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { getPetById } from "@/lib/data";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { Suspense } from "react";

// export default function PetDetailsPage({ params }: { params: { id: string } }) {
//   const pet = getPetById(params.id);

//   if (!pet) {
//     notFound();
//   }

//   return (
//     <main className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
//             <Image
//               src={pet.image || "/placeholder.png"}
//               alt={pet.name}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-2">
//             {pet.additionalImages?.map((img, i) => (
//               <div
//                 key={i}
//                 className="relative aspect-square rounded-lg overflow-hidden"
//               >
//                 <Image
//                   src={img || "/placeholder.png"}
//                   alt={`${pet.name} photo ${i + 1}`}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h1 className="text-3xl font-bold">{pet.name}</h1>
//               <div className="flex gap-2 mt-2">
//                 <Badge variant="outline">{pet.type}</Badge>
//                 <Badge variant="outline">{pet.breed}</Badge>
//                 <Badge variant="outline">{pet.age} years old</Badge>
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <Button variant="default">Adopt Me</Button>
//               <FavoritePetButton petId={pet.id} petName={pet.name} />
//             </div>
//           </div>

//           <Tabs defaultValue="about">
//             <TabsList className="grid w-full grid-cols-3">
//               <TabsTrigger value="about">About</TabsTrigger>
//               <TabsTrigger value="details">Details</TabsTrigger>
//               <TabsTrigger value="adoption">Adoption</TabsTrigger>
//             </TabsList>
//             <TabsContent value="about" className="space-y-4 mt-4">
//               <p>{pet.description}</p>
//               <h3 className="font-semibold text-lg">Personality</h3>
//               <p>{pet.personality}</p>
//             </TabsContent>
//             <TabsContent value="details" className="space-y-4 mt-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <h3 className="font-semibold">Gender</h3>
//                   <p>{pet.gender}</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Size</h3>
//                   <p>{pet.size}</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Color</h3>
//                   <p>{pet.color}</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Vaccinated</h3>
//                   <p>{pet.vaccinated ? "Yes" : "No"}</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Neutered/Spayed</h3>
//                   <p>{pet.neutered ? "Yes" : "No"}</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Good with kids</h3>
//                   <p>{pet.goodWithKids ? "Yes" : "No"}</p>
//                 </div>
//               </div>
//             </TabsContent>
//             <TabsContent value="adoption" className="mt-4">
//               <AdoptionForm petId={pet.id} petName={pet.name} />
//             </TabsContent>
//           </Tabs>

//           <Card className="mt-8">
//             <CardContent className="pt-6">
//               <h3 className="font-semibold text-lg mb-4">Location</h3>
//               <Suspense
//                 fallback={
//                   <div className="h-[300px] bg-muted flex items-center justify-center">
//                     Loading map...
//                   </div>
//                 }
//               >
//                 <PetMap location={pet.location} address={pet.address} />
//               </Suspense>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 {pet.address}
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";
import AdoptionForm from "@/components/adoption-form";
import FavoritePetButton from "@/components/favorite-pet-button";
import PetMap from "@/components/pet-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface Pet {
  id: string;
  name: string;
  type: string | { id: string; name: string };
  breed: string | { id: string; name: string };
  age: number;
  description: string;
  personality: string;
  gender: string;
  size: string;
  color: string | { id: string; name: string };
  vaccinated: boolean;
  neutered: boolean;
  goodWithKids: boolean;
  image?: string;
  additionalImages?: string[];
  location: { lat: number; lng: number };
  address: string;
}

function renderNameOrValue(
  value: string | { id: string; name: string }
): string {
  return typeof value === "object" && value !== null ? value.name : value;
}

export default function PetDetailsPage() {
  const params = useParams(); // must be inside component!
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPet() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:8000/pets/${params.id}/`);
        if (!res.ok) throw new Error("Pet not found");
        const data = await res.json();
        setPet(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch pet data");
      } finally {
        setLoading(false);
      }
    }

    fetchPet();
  }, [params.id]);

  if (loading) {
    return <p className="text-center py-20">Loading pet data...</p>;
  }

  if (error) {
    return <p className="text-center py-20 text-red-500">Error: {error}</p>;
  }

  if (!pet) {
    return <p className="text-center py-20">Pet not found.</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
            <Image
              src={pet.image || "/placeholder.png"}
              alt={pet.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {pet.additionalImages?.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={img || "/placeholder.png"}
                  alt={`${pet.name} photo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold">{pet.name}</h1>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline">{renderNameOrValue(pet.type)}</Badge>
                <Badge variant="outline">{renderNameOrValue(pet.breed)}</Badge>
                <Badge variant="outline">{pet.age} years old</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="default">Adopt Me</Button>
              <FavoritePetButton petId={pet.id} petName={pet.name} />
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="adoption">Adoption</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-4 mt-4">
              <p>{pet.description}</p>
              <h3 className="font-semibold text-lg">Personality</h3>
              <p>{pet.personality}</p>
            </TabsContent>
            <TabsContent value="details" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Gender</h3>
                  <p>{pet.gender}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Size</h3>
                  <p>{pet.size}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Color</h3>
                  <p>{renderNameOrValue(pet.color)}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Vaccinated</h3>
                  <p>{pet.vaccinated ? "Yes" : "No"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Neutered/Spayed</h3>
                  <p>{pet.neutered ? "Yes" : "No"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Good with kids</h3>
                  <p>{pet.goodWithKids ? "Yes" : "No"}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="adoption" className="mt-4">
              <AdoptionForm petId={pet.id} petName={pet.name} />
            </TabsContent>
          </Tabs>

          <Card className="mt-8">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Location</h3>
              <Suspense
                fallback={
                  <div className="h-[300px] bg-muted flex items-center justify-center">
                    Loading map...
                  </div>
                }
              >
                <PetMap location={pet.location} address={pet.address} />
              </Suspense>
              <p className="mt-2 text-sm text-muted-foreground">
                {pet.address}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
