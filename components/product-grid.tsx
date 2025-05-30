"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { getProducts, type Product } from "@/lib/data"
import { toast } from "@/hooks/use-toast"
import { useCartStore } from "@/lib/cart-store"

export default function ProductGrid() {
  const searchParams = useSearchParams()
  const { addItem, toggleFavorite, favorites } = useCartStore()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const category = searchParams.get("category") || ""
  const petType = searchParams.get("petType") || ""
  const query = searchParams.get("q") || ""
  const minPrice = Number.parseInt(searchParams.get("minPrice") || "0")
  const maxPrice = Number.parseInt(searchParams.get("maxPrice") || "200")
  const inStock = searchParams.get("inStock") === "true"
  const onSale = searchParams.get("onSale") === "true"

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)
        const fetchedProducts = await getProducts()
        setProducts(fetchedProducts)
      } catch (err) {
        setError("Failed to load products. Please try again later.")
        console.error("Error fetching products:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Filter products based on search params
  const filteredProducts = products.filter((product) => {
    if (category && category !== "all" && product.category !== category) return false
    // Use both petType and pet_type for compatibility
    const productPetType = product.petType || product.pet_type
    if (petType && petType !== "all" && productPetType !== petType) return false
    if (
      query &&
      !product.name.toLowerCase().includes(query.toLowerCase()) &&
      !product.description.toLowerCase().includes(query.toLowerCase()) &&
      !product.brand.toLowerCase().includes(query.toLowerCase())
    )
      return false

    const productPrice = Number(product.price) || 0
    if (productPrice < minPrice || productPrice > maxPrice) return false

    // Use both inStock and in_stock for compatibility
    const productInStock = product.inStock ?? product.in_stock
    if (inStock && !productInStock) return false

    // Use both discountPrice and discount_price for compatibility
    const productDiscountPrice = product.discountPrice ?? product.discount_price
    if (onSale && !productDiscountPrice) return false
    return true
  })

  const handleAddToCart = (product: Product) => {
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

  const handleToggleFavorite = (e: React.MouseEvent, id: string | number, name: string) => {
    e.preventDefault()
    e.stopPropagation()

    const favoriteId = `product_${id}` // Add prefix to distinguish from pets
    const wasFavorited = favorites.includes(favoriteId)
    toggleFavorite(favoriteId)

    toast({
      title: wasFavorited ? "Removed from favorites" : "Added to favorites",
      description: wasFavorited
        ? `${name} has been removed from your favorites.`
        : `${name} has been added to your favorites.`,
    })
  }

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

  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-destructive">Error Loading Products</h3>
        <p className="text-muted-foreground mt-2">{error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </div>
    )
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => {
        const favoriteId = `product_${product.id}`
        const isFavorited = favorites.includes(favoriteId)
        const productInStock = product.inStock ?? product.in_stock
        const productDiscountPrice = product.discountPrice ?? product.discount_price
        const productPrice = Number(product.price) || 0
        const discountPrice = productDiscountPrice ? Number(productDiscountPrice) : null

        return (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
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
                className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full ${
                  isFavorited ? "text-red-500 hover:text-red-600" : ""
                }`}
                onClick={(e) => handleToggleFavorite(e, product.id, product.name)}
              >
                <Heart className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
                <span className="sr-only">{isFavorited ? "Remove from favorites" : "Add to favorites"}</span>
              </Button>
            </div>
            <CardContent className="p-4">
              <div>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="mb-2">
                    {product.category}
                  </Badge>
                  {product.rating && (
                    <div className="flex items-center">
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs ml-1">{product.rating}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{product.brand}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-bold">${productPrice.toFixed(2)}</span>
                  {discountPrice && (
                    <span className="text-sm text-muted-foreground line-through">${discountPrice.toFixed(2)}</span>
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
  )
}
