"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VetList() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const specialty = searchParams.get("specialty") || "";
  const location = searchParams.get("location") || "";

  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVets() {
      try {
        const response = await fetch("http://localhost:8000/veterinarians/");
        const data = await response.json();
        setVets(data);
      } catch (error) {
        console.error("Failed to fetch veterinarians:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVets();
  }, []);

  // Filter vets based on specialty and location search params
  const filteredVets = vets.filter((vet) => {
    if (
      specialty &&
      specialty !== "all" &&
      !vet.specialties.includes(specialty)
    )
      return false;
    if (
      location &&
      !vet.location.toLowerCase().includes(location.toLowerCase())
    )
      return false;
    return true;
  });

  const handleBookAppointment = (vetId, vetName) => {
    router.push(
      `/veterinary?vetId=${vetId}&vetName=${encodeURIComponent(
        vetName
      )}#appointment-form`
    );
  };

  if (loading) return <p>Loading veterinarians...</p>;

  if (filteredVets.length === 0)
    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-medium">No veterinarians found</h3>
        <p className="text-muted-foreground mt-2">
          Try adjusting your search filters
        </p>
      </div>
    );

  return (
    <div className="space-y-6 mt-6">
      {filteredVets.map((vet) => (
        <Card key={vet.id}>
          <div className="md:flex">
            <div className="md:w-1/3 p-4">
              <div className="relative aspect-square md:aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src={vet.image || "/placeholder.svg"}
                  alt={vet.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="font-medium">Available:</span>
                  <span className="ml-1">{vet.nextAvailable || "Today"}</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{vet.name}</CardTitle>
                    <CardDescription>{vet.clinic}</CardDescription>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">{vet.rating}</span>
                    <span className="text-muted-foreground ml-1">
                      ({vet.reviewCount})
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {vet.specialties.map((spec) => (
                    <Badge key={spec} variant="secondary">
                      {spec}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                    <span>{vet.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{vet.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{vet.hours}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  {vet.description ||
                    "Dr. " +
                      vet.name.split(" ")[1] +
                      " specializes in providing compassionate care for all types of pets. With years of experience, they offer comprehensive veterinary services to keep your pet healthy and happy."}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full md:w-auto"
                  onClick={() => handleBookAppointment(vet.id, vet.name)}
                >
                  Book Appointment
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
