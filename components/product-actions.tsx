"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import { toast } from "@/hooks/use-toast"

interface ProductActionsProps {
  product: any
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem, toggleFavorite, isFavorite } = useCartStore()

  const handleAddToCart = () => {
    if (!product.inStock) return

    // Add item to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }

    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity === 1 ? "item" : "items"} of ${product.name} added to your cart.`,
    })
  }

  const handleToggleFavorite = () => {
    toggleFavorite(product.id)

    toast({
      title: isFavorite(product.id) ? "Removed from favorites" : "Added to favorites",
      description: isFavorite(product.id)
        ? `${product.name} has been removed from your favorites.`
        : `${product.name} has been added to your favorites.`,
    })
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="h-10 w-10 rounded-none"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button variant="ghost" size="icon" onClick={increaseQuantity} className="h-10 w-10 rounded-none">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Button size="lg" className="flex-1" disabled={!product.inStock} onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>

        <Button
          size="icon"
          variant="outline"
          className={`h-10 w-10 ${isFavorite(product.id) ? "text-red-500 hover:text-red-600" : ""}`}
          onClick={handleToggleFavorite}
        >
          <Heart className={`h-5 w-5 ${isFavorite(product.id) ? "fill-current" : ""}`} />
          <span className="sr-only">{isFavorite(product.id) ? "Remove from favorites" : "Add to favorites"}</span>
        </Button>
      </div>

      {!product.inStock && (
        <div className="bg-muted p-3 rounded-md text-center">
          <p className="text-muted-foreground">This item is currently out of stock. Please check back later.</p>
        </div>
      )}
    </div>
  )
}

