"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { getProductById, type Product } from "@/lib/data"
import ProductActions from "@/components/product-actions"

export default function ProductDetailsPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const productId = params.id as string

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) return

      try {
        setLoading(true)
        setError(null)
        const fetchedProduct = await getProductById(productId)

        if (!fetchedProduct) {
          setError("Product not found")
          return
        }

        setProduct(fetchedProduct)
      } catch (err) {
        console.error("Error fetching product:", err)
        setError("Failed to load product details")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="aspect-square rounded-lg bg-muted animate-pulse mb-4"></div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-muted animate-pulse"></div>
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
    )
  }

  if (error || !product) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            {error || "The product you're looking for doesn't exist or is no longer available."}
          </p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </main>
    )
  }

  // Safely handle price values
  const productPrice = Number(product.price) || 0
  const productDiscountPrice = product.discountPrice ?? product.discount_price
  const discountPrice = productDiscountPrice ? Number(productDiscountPrice) : null
  const productInStock = product.inStock ?? product.in_stock ?? false

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name || "Product"}
              fill
              className="object-contain"
              priority
            />
            {discountPrice && (
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                SALE
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.additionalImages?.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${product.name || "Product"} photo ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold">{product.name || "Unknown Product"}</h1>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline">{product.category || "Unknown"}</Badge>
                <Badge variant="outline">
                  For{" "}
                  {typeof (product.petType || product.pet_type) === "object"
                    ? (product.petType || product.pet_type)?.name || "All Pets"
                    : product.petType || product.pet_type || "All Pets"}
                </Badge>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold">${productPrice.toFixed(2)}</p>
                  {discountPrice && <p className="text-muted-foreground line-through">${discountPrice.toFixed(2)}</p>}
                </div>
                {!productInStock && <p className="text-red-500 font-medium mt-2">Out of Stock</p>}
              </div>
            </div>
          </div>

          <ProductActions product={product} />

          <Tabs defaultValue="description" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4 mt-4">
              <p>{product.description || "No description available."}</p>
            </TabsContent>
            <TabsContent value="details" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Brand</h3>
                  <p>{product.brand || "Unknown"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Weight</h3>
                  <p>{product.weight || "Not specified"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Dimensions</h3>
                  <p>{product.dimensions || "Not specified"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Material</h3>
                  <p>{product.material || "Not specified"}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <div className="space-y-4">
                {product.reviews && product.reviews.length > 0 ? (
                  product.reviews.map((review, i) => (
                    <Card key={i}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between">
                          <p className="font-semibold">{review.name || "Anonymous"}</p>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <span
                                key={starIndex}
                                className={starIndex < (review.rating || 0) ? "text-yellow-400" : "text-gray-300"}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{review.date || "No date"}</p>
                        <p className="mt-2">{review.comment || "No comment provided."}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-muted-foreground">No reviews yet.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
