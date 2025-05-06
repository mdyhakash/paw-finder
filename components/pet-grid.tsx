"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin } from "lucide-react"
import { getPets } from "@/lib/data"
import { useCartStore } from "@/lib/cart-store"
import { toast } from "@/hooks/use-toast"

export default function PetGrid() {
  const searchParams = useSearchParams()
  const { toggleFavorite, favorites } = useCartStore()

  const type = searchParams.get("type") || ""
  const breed = searchParams.get("breed") || ""
  const location = searchParams.get("location") || ""
  const minAge = Number.parseInt(searchParams.get("minAge") || "0")
  const maxAge = Number.parseInt(searchParams.get("maxAge") || "15")

  // Filter pets based on search params
  const pets = getPets().filter((pet) => {
    if (type && pet.type !== type) return false
    if (breed && pet.breed !== breed) return false
    if (location && !pet.location.toLowerCase().includes(location.toLowerCase())) return false
    if (pet.age < minAge || pet.age > maxAge) return false
    return true
  })

  const handleFavoriteClick = (e: React.MouseEvent, petId: string, petName: string) => {
    e.preventDefault()
    const isFavorited = favorites.includes(petId)

    toggleFavorite(petId)

    toast({
      title: !isFavorited ? "Added to favorites" : "Removed from favorites",
      description: !isFavorited
        ? `${petName} has been added to your favorites.`
        : `${petName} has been removed from your favorites.`,
    })
  }

  if (pets.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No pets found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pets.map((pet) => {
        const isFavorited = favorites.includes(pet.id)

        return (
          <Card key={pet.id} className="overflow-hidden">
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={pet.image || "/placeholder.svg"}
                  alt={pet.name}
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
                onClick={(e) => handleFavoriteClick(e, pet.id, pet.name)}
              >
                <Heart className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
                <span className="sr-only">{isFavorited ? "Remove from favorites" : "Add to favorites"}</span>
              </Button>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{pet.name}</h3>
                  <p className="text-sm text-muted-foreground">{pet.breed}</p>
                </div>
                <Badge variant="outline">{pet.age} yrs</Badge>
              </div>
              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>{pet.location}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/pets/${pet.id}`} className="w-full">
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
//api jsx

// "use client"

// import { useEffect, useState } from "react"
// import type React from "react"

// import { useSearchParams } from "next/navigation"
// import Link from "next/link"
// import Image from "next/image"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Heart, MapPin } from "lucide-react"
// import { useCartStore } from "@/lib/cart-store"
// import { toast } from "@/hooks/use-toast"

// type Pet = {
//   id: string
//   name: string
//   breed: string
//   type: string
//   age: number
//   location: string
//   image?: string
// }

// export default function PetGrid() {
//   const searchParams = useSearchParams()
//   const { toggleFavorite, favorites } = useCartStore()
//   const [pets, setPets] = useState<Pet[]>([])
//   const [loading, setLoading] = useState(true)

//   const type = searchParams.get("type") || ""
//   const breed = searchParams.get("breed") || ""
//   const location = searchParams.get("location") || ""
//   const minAge = Number.parseInt(searchParams.get("minAge") || "0")
//   const maxAge = Number.parseInt(searchParams.get("maxAge") || "15")

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const res = await fetch("http://localhost:8000/api/pets/")
//         const data = await res.json()
//         setPets(data)
//       } catch (error) {
//         console.error("Failed to fetch pets:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchPets()
//   }, [])

//   const filteredPets = pets.filter((pet) => {
//     if (type && pet.type !== type) return false
//     if (breed && pet.breed !== breed) return false
//     if (location && !pet.location.toLowerCase().includes(location.toLowerCase())) return false
//     if (pet.age < minAge || pet.age > maxAge) return false
//     return true
//   })

//   const handleFavoriteClick = (e: React.MouseEvent, petId: string, petName: string) => {
//     e.preventDefault()
//     const isFavorited = favorites.includes(petId)

//     toggleFavorite(petId)

//     toast({
//       title: !isFavorited ? "Added to favorites" : "Removed from favorites",
//       description: !isFavorited
//         ? `${petName} has been added to your favorites.`
//         : `${petName} has been removed from your favorites.`,
//     })
//   }

//   if (loading) {
//     return <div className="text-center py-12">Loading pets...</div>
//   }

//   if (filteredPets.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-lg font-medium">No pets found</h3>
//         <p className="text-muted-foreground mt-2">Try adjusting your search filters</p>
//       </div>
//     )
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {filteredPets.map((pet) => {
//         const isFavorited = favorites.includes(pet.id)

//         return (
//           <Card key={pet.id} className="overflow-hidden">
//             <div className="relative">
//               <div className="aspect-square relative overflow-hidden">
//                 <Image
//                   src={pet.image || "/placeholder.svg"}
//                   alt={pet.name}
//                   fill
//                   className="object-cover transition-transform hover:scale-105"
//                 />
//               </div>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full ${
//                   isFavorited ? "text-red-500 hover:text-red-600" : ""
//                 }`}
//                 onClick={(e) => handleFavoriteClick(e, pet.id, pet.name)}
//               >
//                 <Heart className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
//                 <span className="sr-only">{isFavorited ? "Remove from favorites" : "Add to favorites"}</span>
//               </Button>
//             </div>
//             <CardContent className="p-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-semibold text-lg">{pet.name}</h3>
//                   <p className="text-sm text-muted-foreground">{pet.breed}</p>
//                 </div>
//                 <Badge variant="outline">{pet.age} yrs</Badge>
//               </div>
//               <div className="flex items-center mt-2 text-sm text-muted-foreground">
//                 <MapPin className="h-3.5 w-3.5 mr-1" />
//                 <span>{pet.location}</span>
//               </div>
//             </CardContent>
//             <CardFooter className="p-4 pt-0">
//               <Link href={`/pets/${pet.id}`} className="w-full">
//                 <Button variant="default" className="w-full">
//                   View Details
//                 </Button>
//               </Link>
//             </CardFooter>
//           </Card>
//         )
//       })}
//     </div>
//   )
// }

//