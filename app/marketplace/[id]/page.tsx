import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById } from "@/lib/data"
import ProductActions from "@/components/product-actions"

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
            {product.discountPrice && (
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
                  alt={`${product.name} photo ${i + 1}`}
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
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant="outline">For {product.petType}</Badge>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                  {product.discountPrice && (
                    <p className="text-muted-foreground line-through">${product.discountPrice.toFixed(2)}</p>
                  )}
                </div>
                {!product.inStock && <p className="text-red-500 font-medium mt-2">Out of Stock</p>}
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
              <p>{product.description}</p>
            </TabsContent>
            <TabsContent value="details" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Brand</h3>
                  <p>{product.brand}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Weight</h3>
                  <p>{product.weight}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Dimensions</h3>
                  <p>{product.dimensions}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Material</h3>
                  <p>{product.material}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <div className="space-y-4">
                {product.reviews?.map((review, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between">
                        <p className="font-semibold">{review.name}</p>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{review.date}</p>
                      <p className="mt-2">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}

