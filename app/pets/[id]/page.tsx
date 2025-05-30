"use client";

import AdoptionForm from "@/components/adoption-form";
import FavoritePetButton from "@/components/favorite-pet-button";
import PetMap from "@/components/pet-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPetById, type Pet } from "@/lib/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PetDetailsPage() {
  const params = useParams();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const petId = params.id as string;

  useEffect(() => {
    async function fetchPet() {
      if (!petId) return;

      try {
        setLoading(true);
        setError(null);
        const fetchedPet = await getPetById(petId);

        if (!fetchedPet) {
          setError("Pet not found");
          return;
        }

        setPet(fetchedPet);
      } catch (err) {
        console.error("Error fetching pet:", err);
        setError("Failed to load pet details");
      } finally {
        setLoading(false);
      }
    }

    fetchPet();
  }, [petId]);

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="aspect-square rounded-lg bg-muted animate-pulse mb-4"></div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-muted animate-pulse"
                ></div>
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-2/3 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
              <div className="h-32 bg-muted rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !pet) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Pet Not Found</h1>
          <p className="text-muted-foreground mb-6">
            {error ||
              "The pet you're looking for doesn't exist or has been adopted."}
          </p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
            <Image
              src={pet.image || "/placeholder.svg"}
              alt={pet.name || "Pet"}
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
                  src={img || "/placeholder.svg"}
                  alt={`${pet.name || "Pet"} photo ${i + 1}`}
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
              <h1 className="text-3xl font-bold">
                {pet.name || "Unknown Pet"}
              </h1>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline">
                  {typeof (pet.type || pet.pet_type) === "object"
                    ? (pet.type || pet.pet_type)?.name || "Unknown"
                    : pet.type || pet.pet_type || "Unknown"}
                </Badge>
                <Badge variant="outline">
                  {typeof pet.breed === "object"
                    ? pet.breed?.name || "Unknown breed"
                    : pet.breed || "Unknown breed"}
                </Badge>
                <Badge variant="outline">{pet.age || 0} years old</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="default">Adopt Me</Button>
              <FavoritePetButton
                petId={pet.id.toString()}
                petName={pet.name || "Pet"}
              />
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="adoption">Adoption</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-4 mt-4">
              <p>{pet.description || "No description available."}</p>
              <h3 className="font-semibold text-lg">Personality</h3>
              <p>
                {pet.personality || "Personality information not available."}
              </p>
            </TabsContent>
            <TabsContent value="details" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Gender</h3>
                  <p>{pet.gender || "Unknown"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Size</h3>
                  <p>
                    {typeof pet.size === "object"
                      ? pet.size?.name || "Unknown"
                      : pet.size || "Unknown"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Color</h3>
                  <p>
                    {typeof pet.color === "object"
                      ? pet.color?.name || "Unknown"
                      : pet.color || "Unknown"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Breed</h3>
                  <p>
                    {typeof pet.breed === "object"
                      ? pet.breed?.name || "Unknown"
                      : pet.breed || "Unknown"}
                  </p>
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
                  <p>{pet.goodWithKids ?? pet.good_with_kids ? "Yes" : "No"}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="adoption" className="mt-4">
              <AdoptionForm
                petId={pet.id.toString()}
                petName={pet.name || "Pet"}
              />
            </TabsContent>
          </Tabs>

          <Card className="mt-8">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Location</h3>
              <PetMap
                location={pet.location || "Unknown location"}
                address={pet.address || "Address not available"}
              />
              <p className="mt-2 text-sm text-muted-foreground">
                {pet.address || "Address not available"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
