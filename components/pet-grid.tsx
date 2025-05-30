"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin } from "lucide-react"
import { getPets, type Pet } from "@/lib/data"
import { useCartStore } from "@/lib/cart-store"
import { toast } from "@/hooks/use-toast"

export default function PetGrid() {
  const searchParams = useSearchParams()
  const { toggleFavorite, favorites } = useCartStore()
  const [pets, setPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Get search parameters from URL
  const type = searchParams.get("type") || ""
  const breed = searchParams.get("breed") || ""
  const location = searchParams.get("location") || ""
  const minAge = Number.parseInt(searchParams.get("minAge") || "0")
  const maxAge = Number.parseInt(searchParams.get("maxAge") || "15")

  // Fetch pets data
  useEffect(() => {
    async function fetchPets() {
      try {
        setLoading(true)
        setError(null)
        const fetchedPets = await getPets()
        //console.log("All pets data:", fetchedPets)
        // Log the first pet to see its structure
        if (fetchedPets.length > 0) {
          // console.log("First pet structure:", fetchedPets[0])
          // console.log(
          //   "Pet types in data:",
          //   fetchedPets.map((p) => ({ name: p.name, type: p.type, pet_type: p.pet_type })),
          // )
        }
        setPets(fetchedPets)
      } catch (err) {
        setError("Failed to load pets. Please try again later.")
        console.error("Error fetching pets:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPets()
  }, [])

  // Helper function to safely get string value
  const safeString = (value: any): string => {
    if (value === null || value === undefined) return ""
    return String(value)
  }

  // Helper function to normalize strings for comparison
  const normalize = (str: any): string => {
    return safeString(str).toLowerCase().trim()
  }

  // Apply filters to pets
  const filteredPets = pets.filter((pet) => {
    ///console.log(`\n--- Filtering pet: ${pet.name} ---`)

    // Extract pet type (handle both pet.type and pet.pet_type)
    const petType = pet.type || pet.pet_type
    let petTypeStr = ""

    if (typeof petType === "object" && petType?.name) {
      petTypeStr = petType.name
    } else {
      petTypeStr = safeString(petType)
    }



    // Filter by pet type - make this more flexible
    if (type && type !== "all") {
      const normalizedPetType = normalize(petTypeStr)
      const normalizedSearchType = normalize(type)

      // Try multiple matching strategies
      const exactMatch = normalizedPetType === normalizedSearchType
      const containsMatch =
        normalizedPetType.includes(normalizedSearchType) || normalizedSearchType.includes(normalizedPetType)

      // Special cases for common variations
      const isMatch =
        exactMatch ||
        containsMatch ||
        (normalizedSearchType === "dog" && (normalizedPetType === "dogs" || normalizedPetType.includes("dog"))) ||
        (normalizedSearchType === "cat" && (normalizedPetType === "cats" || normalizedPetType.includes("cat"))) ||
        (normalizedSearchType === "bird" && (normalizedPetType === "birds" || normalizedPetType.includes("bird"))) ||
        (normalizedSearchType === "rabbit" &&
          (normalizedPetType === "rabbits" || normalizedPetType.includes("rabbit"))) ||
        (normalizedSearchType === "fish" && (normalizedPetType === "fishes" || normalizedPetType.includes("fish"))) ||
        (normalizedSearchType === "small pet" &&
          (normalizedPetType.includes("small") ||
            normalizedPetType.includes("hamster") ||
            normalizedPetType.includes("guinea")))

      ////console.log(`Type match result: ${isMatch} (exact: ${exactMatch}, contains: ${containsMatch})`)

      if (!isMatch) {
        ///console.log(`❌ Filtered out by type: ${pet.name}`)
        return false
      }
    }

    // Extract pet breed
    const petBreed = pet.breed
    let petBreedStr = ""

    if (typeof petBreed === "object" && petBreed?.name) {
      petBreedStr = petBreed.name
    } else {
      petBreedStr = safeString(petBreed)
    }

    // Filter by breed
    if (breed && breed !== "all") {
      const normalizedPetBreed = normalize(petBreedStr)
      const normalizedSearchBreed = normalize(breed)

      //console.log(`Breed check - Pet: "${normalizedPetBreed}", Search: "${normalizedSearchBreed}"`)

      if (normalizedPetBreed !== normalizedSearchBreed) {
        //console.log(`❌ Filtered out by breed: ${pet.name}`)
        return false
      }
    }

    // Filter by location
    if (location) {
      const normalizedPetLocation = normalize(pet.location)
      const normalizedSearchLocation = normalize(location)

      if (!normalizedPetLocation.includes(normalizedSearchLocation)) {
        ////console.log(`❌ Filtered out by location: ${pet.name}`)
        return false
      }
    }

    // Filter by age
    const petAge = typeof pet.age === "number" ? pet.age : Number.parseInt(safeString(pet.age) || "0")
    if (petAge < minAge || petAge > maxAge) {
      //console.log(`❌ Filtered out by age: ${pet.name} (age: ${petAge}, range: ${minAge}-${maxAge})`)
      return false
    }

    //console.log(`✅ Pet passed all filters: ${pet.name}`)
    return true
  })

 

  // Handle favorite button click
  const handleFavoriteClick = (e: React.MouseEvent, petId: string | number, petName: string) => {
    e.preventDefault()
    e.stopPropagation()

    const favoriteId = `pet_${petId}`
    const wasFavorited = favorites.includes(favoriteId)
    toggleFavorite(favoriteId)

    toast({
      title: wasFavorited ? "Removed from favorites" : "Added to favorites",
      description: wasFavorited
        ? `${petName} has been removed from your favorites.`
        : `${petName} has been added to your favorites.`,
    })
  }

  // Loading state
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="overflow-hidden animate-pulse">
            <div className="aspect-square bg-muted"></div>
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-3 bg-muted rounded mb-2 w-2/3"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="h-10 bg-muted rounded w-full"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-destructive">Error Loading Pets</h3>
        <p className="text-muted-foreground mt-2">{error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </div>
    )
  }

  // No results state
  if (filteredPets.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No pets found</h3>
        <p className="text-muted-foreground mt-2">
          Try adjusting your search filters
          <br />
          <small className="text-xs">
            Active filters: {type ? `Type: "${type}", ` : ""}
            {breed ? `Breed: "${breed}", ` : ""}
            {location ? `Location: "${location}", ` : ""}
            Age: {minAge}-{maxAge}
          </small>
        </p>
        <div className="mt-4 space-y-2">
          <Button onClick={() => (window.location.href = "/")} className="mr-2">
            Clear All Filters
          </Button>
          <div className="text-xs text-muted-foreground">
            <p>Debug info (check browser console for detailed logs)</p>
            <p>Total pets loaded: {pets.length}</p>
            {pets.length > 0 && (
              <p>Available pet types: {Array.from(new Set(pets.map((p) => p.type || p.pet_type))).join(", ")}</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Results grid
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredPets.map((pet) => {
        // Safely extract display values
        const petId = safeString(pet.id)
        const petName = safeString(pet.name)

        // Handle breed display
        let petBreedDisplay = ""
        if (typeof pet.breed === "object" && pet.breed?.name) {
          petBreedDisplay = pet.breed.name
        } else if (typeof pet.breed === "string") {
          petBreedDisplay = pet.breed
        } else {
          petBreedDisplay = "Unknown breed"
        }

        const petAge = safeString(pet.age)
        const petLocation = safeString(pet.location)
        const petImage = safeString(pet.image) || "/placeholder.svg"

        const favoriteId = `pet_${petId}`
        const isFavorited = favorites.includes(favoriteId)

        return (
          <Card key={petId} className="overflow-hidden">
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={petImage || "/placeholder.svg"}
                  alt={petName}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full ${
                  isFavorited ? "text-red-500 hover:text-red-600" : ""
                }`}
                onClick={(e) => handleFavoriteClick(e, petId, petName)}
              >
                <Heart className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
                <span className="sr-only">{isFavorited ? "Remove from favorites" : "Add to favorites"}</span>
              </Button>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{petName}</h3>
                  <p className="text-sm text-muted-foreground">{petBreedDisplay}</p>
                </div>
                <Badge variant="outline">{petAge} yrs</Badge>
              </div>
              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>{petLocation}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/pets/${petId}`} className="w-full">
                <Button variant="default" className="w-full">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
