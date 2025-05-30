"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import { toast } from "@/hooks/use-toast"

interface FavoritePetButtonProps {
  petId: string
  petName: string
}

export default function FavoritePetButton({ petId, petName }: FavoritePetButtonProps) {
  const { toggleFavorite, favorites } = useCartStore()
  const favoriteId = `pet_${petId}`
  const isFavorited = favorites.includes(favoriteId)

  const handleToggleFavorite = () => {
    toggleFavorite(favoriteId)

    toast({
      title: !isFavorited ? "Added to favorites" : "Removed from favorites",
      description: !isFavorited
        ? `${petName} has been added to your favorites.`
        : `${petName} has been removed from your favorites.`,
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`${isFavorited ? "text-red-500 hover:text-red-600" : ""}`}
      onClick={handleToggleFavorite}
    >
      <Heart className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
      <span className="sr-only">{isFavorited ? "Remove from favorites" : "Add to favorites"}</span>
    </Button>
  )
}
