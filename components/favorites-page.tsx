"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCartStore } from "@/lib/cart-store"
import { getPetById, getProductById } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, ShoppingCart } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function FavoritesPage() {
  const { favorites, toggleFavorite, addItem } = useCartStore()
  const [favoritePets, setFavoritePets] = useState<any[]>([])
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([])

  useEffect(() => {
    // Get favorite pets and products
    const pets = favorites.map((id) => getPetById(id)).filter((pet) => pet !== undefined)

    const products = favorites.map((id) => getProductById(id)).filter((product) => product !== undefined)

    setFavoritePets(pets as any[])
    setFavoriteProducts(products as any[])
  }, [favorites])

  const handleRemoveFavorite = (id: string, name: string) => {
    toggleFavorite(id)
    toast({
      title: "Removed from favorites",
      description: `${name} has been removed from your favorites.`,
    })
  }

  const handleAddToCart = (product: any) => {
    if (!product.inStock) return

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">My Favorites</h1>

      <Tabs defaultValue="pets" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="pets">Pets ({favoritePets.length})</TabsTrigger>
          <TabsTrigger value="products">Products ({favoriteProducts.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pets">
          {favoritePets.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No favorite pets yet</h3>
              <p className="text-muted-foreground mt-2">Browse our pets and add some to your favorites</p>
              <Link href="/" className="mt-4 inline-block">
                <Button>Find Pets</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favoritePets.map((pet) => (
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
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full text-red-500 hover:text-red-600"
                      onClick={() => handleRemoveFavorite(pet.id, pet.name)}
                    >
                      <Heart className="h-5 w-5 fill-current" />
                      <span className="sr-only">Remove from favorites</span>
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
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="products">
          {favoriteProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No favorite products yet</h3>
              <p className="text-muted-foreground mt-2">
                Browse our marketplace and add some products to your favorites
              </p>
              <Link href="/marketplace" className="mt-4 inline-block">
                <Button>Shop Now</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favoriteProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform hover:scale-105"
                      />
                      {product.discountPrice && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          SALE
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <p className="font-semibold text-muted-foreground">Out of Stock</p>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full text-red-500 hover:text-red-600"
                      onClick={() => handleRemoveFavorite(product.id, product.name)}
                    >
                      <Heart className="h-5 w-5 fill-current" />
                      <span className="sr-only">Remove from favorites</span>
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{product.brand}</p>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-bold">${product.price.toFixed(2)}</span>
                        {product.discountPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.discountPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Link href={`/marketplace/${product.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        Details
                      </Button>
                    </Link>
                    <Button
                      size="icon"
                      className="flex-none"
                      disabled={!product.inStock}
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

