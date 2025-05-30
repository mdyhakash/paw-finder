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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFavorites() {
      try {
        setLoading(true)

        // Ensure all favorites are strings and separate pet and product favorites using prefixes
        const validFavorites = favorites.filter((id): id is string => typeof id === "string")
        const petFavorites = validFavorites.filter((id) => id.startsWith("pet_")).map((id) => id.replace("pet_", ""))
        const productFavorites = validFavorites
          .filter((id) => id.startsWith("product_"))
          .map((id) => id.replace("product_", ""))

        // Get favorite pets and products
        const pets = await Promise.all(
          petFavorites.map(async (id) => {
            try {
              const pet = await getPetById(id)
              return pet || null // Ensure we return null if pet is undefined
            } catch (error) {
              console.error(`Failed to load pet ${id}:`, error)
              return null
            }
          }),
        )

        const products = await Promise.all(
          productFavorites.map(async (id) => {
            try {
              const product = await getProductById(id)
              return product || null // Ensure we return null if product is undefined
            } catch (error) {
              console.error(`Failed to load product ${id}:`, error)
              return null
            }
          }),
        )

        // Filter out null values
        setFavoritePets(pets.filter((pet): pet is NonNullable<typeof pet> => pet !== null))
        setFavoriteProducts(products.filter((product): product is NonNullable<typeof product> => product !== null))
      } catch (error) {
        console.error("Error loading favorites:", error)
      } finally {
        setLoading(false)
      }
    }

    loadFavorites()
  }, [favorites])

  const handleRemoveFavorite = (id: string | number, name: string, type: "pet" | "product") => {
    const favoriteId = `${type}_${id}`
    toggleFavorite(favoriteId)
    toast({
      title: "Removed from favorites",
      description: `${name} has been removed from your favorites.`,
    })
  }

  const handleAddToCart = (product: any) => {
    const productInStock = product.inStock ?? product.in_stock
    if (!productInStock) return

    addItem({
      id: product.id.toString(),
      name: product.name,
      price: Number(product.price) || 0,
      image: product.image,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">My Favorites</h1>
        <div className="text-center py-12">
          <p>Loading your favorites...</p>
        </div>
      </div>
    )
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
              {favoritePets.map((pet) => {
                // Ensure we have string values for all fields we're rendering
                const petId = pet?.id?.toString() || ""
                const petName = pet?.name?.toString() || ""
                const petBreed = pet?.breed?.toString() || ""
                const petAge = pet?.age?.toString() || "0"
                const petLocation = pet?.location?.toString() || ""
                const petImage = pet?.image?.toString() || "/placeholder.svg"

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
                        className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full text-red-500 hover:text-red-600"
                        onClick={() => handleRemoveFavorite(petId, petName, "pet")}
                      >
                        <Heart className="h-5 w-5 fill-current" />
                        <span className="sr-only">Remove from favorites</span>
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{petName}</h3>
                          <p className="text-sm text-muted-foreground">{petBreed}</p>
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
              {favoriteProducts.map((product) => {
                const productId = product?.id?.toString() || ""
                const productName = product?.name?.toString() || ""
                const productPrice = Number(product?.price) || 0
                const productImage = product?.image?.toString() || "/placeholder.svg"
                const productInStock = product?.inStock ?? product?.in_stock ?? false
                const productDiscountPrice = product?.discountPrice ?? product?.discount_price
                const discountPrice = productDiscountPrice ? Number(productDiscountPrice) : null

                return (
                  <Card key={productId} className="overflow-hidden">
                    <div className="relative">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={productImage || "/placeholder.svg"}
                          alt={productName || "Product"}
                          fill
                          className="object-contain p-4 transition-transform hover:scale-105"
                        />
                        {discountPrice && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            SALE
                          </div>
                        )}
                        {!productInStock && (
                          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                            <p className="font-semibold text-muted-foreground">Out of Stock</p>
                          </div>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full text-red-500 hover:text-red-600"
                        onClick={() => handleRemoveFavorite(product.id, product.name, "product")}
                      >
                        <Heart className="h-5 w-5 fill-current" />
                        <span className="sr-only">Remove from favorites</span>
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {product.category || "Unknown"}
                        </Badge>
                        <h3 className="font-semibold text-lg line-clamp-1">{productName || "Unknown product"}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{product.brand || "Unknown brand"}</p>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="font-bold">${productPrice.toFixed(2)}</span>
                          {discountPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${discountPrice.toFixed(2)}
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
                        disabled={!productInStock}
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
