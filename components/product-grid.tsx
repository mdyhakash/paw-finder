// "use client"

// import { useSearchParams } from "next/navigation"
// import Link from "next/link"
// import Image from "next/image"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Heart, ShoppingCart, Star } from "lucide-react"
// import { getProducts } from "@/lib/data"
// import { toast } from "@/hooks/use-toast"
// import { useCartStore } from "@/lib/cart-store"

// export default function ProductGrid() {
//   const searchParams = useSearchParams()
//   const { addItem, toggleFavorite, isFavorite } = useCartStore()

//   const category = searchParams.get("category") || ""
//   const petType = searchParams.get("petType") || ""
//   const query = searchParams.get("q") || ""
//   const minPrice = Number.parseInt(searchParams.get("minPrice") || "0")
//   const maxPrice = Number.parseInt(searchParams.get("maxPrice") || "200")
//   const inStock = searchParams.get("inStock") === "true"
//   const onSale = searchParams.get("onSale") === "true"

//   // Filter products based on search params
//   const products = getProducts().filter((product) => {
//     if (category && category !== "all" && product.category !== category) return false
//     if (petType && petType !== "all" && product.petType !== petType) return false
//     if (
//       query &&
//       !product.name.toLowerCase().includes(query.toLowerCase()) &&
//       !product.description.toLowerCase().includes(query.toLowerCase()) &&
//       !product.brand.toLowerCase().includes(query.toLowerCase())
//     )
//       return false
//     if (product.price < minPrice || product.price > maxPrice) return false
//     if (inStock && !product.inStock) return false
//     if (onSale && !product.discountPrice) return false
//     return true
//   })

//   const handleAddToCart = (product: any) => {
//     if (!product.inStock) return

//     addItem({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//     })

//     toast({
//       title: "Added to cart",
//       description: `${product.name} has been added to your cart.`,
//     })
//   }

//   const handleToggleFavorite = (id: string, name: string) => {
//     toggleFavorite(id)

//     toast({
//       title: isFavorite(id) ? "Removed from favorites" : "Added to favorites",
//       description: isFavorite(id)
//         ? `${name} has been removed from your favorites.`
//         : `${name} has been added to your favorites.`,
//     })
//   }

//   if (products.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-lg font-medium">No products found</h3>
//         <p className="text-muted-foreground mt-2">Try adjusting your search filters</p>
//       </div>
//     )
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.map((product) => (
//         <Card key={product.id} className="overflow-hidden">
//           <div className="relative">
//             <div className="aspect-square relative overflow-hidden">
//               <Image
//                 src={product.image || "/placeholder.svg"}
//                 alt={product.name}
//                 fill
//                 className="object-contain p-4 transition-transform hover:scale-105"
//               />
//               {product.discountPrice && (
//                 <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//                   SALE
//                 </div>
//               )}
//               {!product.inStock && (
//                 <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
//                   <p className="font-semibold text-muted-foreground">Out of Stock</p>
//                 </div>
//               )}
//             </div>
//             <Button
//               variant="ghost"
//               size="icon"
//               className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full ${
//                 isFavorite(product.id) ? "text-red-500 hover:text-red-600" : ""
//               }`}
//               onClick={() => handleToggleFavorite(product.id, product.name)}
//             >
//               <Heart className={`h-5 w-5 ${isFavorite(product.id) ? "fill-current" : ""}`} />
//               <span className="sr-only">{isFavorite(product.id) ? "Remove from favorites" : "Add to favorites"}</span>
//             </Button>
//           </div>
//           <CardContent className="p-4">
//             <div>
//               <div className="flex justify-between items-start">
//                 <Badge variant="outline" className="mb-2">
//                   {product.category}
//                 </Badge>
//                 {product.rating && (
//                   <div className="flex items-center">
//                     <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
//                     <span className="text-xs ml-1">{product.rating}</span>
//                   </div>
//                 )}
//               </div>
//               <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
//               <p className="text-sm text-muted-foreground line-clamp-1">{product.brand}</p>
//               <div className="mt-2 flex items-baseline gap-2">
//                 <span className="font-bold">${product.price.toFixed(2)}</span>
//                 {product.discountPrice && (
//                   <span className="text-sm text-muted-foreground line-through">
//                     ${product.discountPrice.toFixed(2)}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="p-4 pt-0 flex gap-2">
//             <Link href={`/marketplace/${product.id}`} className="flex-1">
//               <Button variant="outline" className="w-full">
//                 Details
//               </Button>
//             </Link>
//             <Button
//               size="icon"
//               className="flex-none"
//               disabled={!product.inStock}
//               onClick={() => handleAddToCart(product)}
//             >
//               <ShoppingCart className="h-4 w-4" />
//               <span className="sr-only">Add to cart</span>
//             </Button>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   )
// }

// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { toast } from "@/hooks/use-toast";
// import { useCartStore } from "@/lib/cart-store";
// import { Heart, ShoppingCart, Star } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function ProductGrid() {
//   const searchParams = useSearchParams();
//   const { addItem, toggleFavorite, isFavorite } = useCartStore();

//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Search filter values
//   const category = searchParams.get("category") || "";
//   const petType = searchParams.get("petType") || "";
//   const query = searchParams.get("q") || "";
//   const minPrice = Number.parseInt(searchParams.get("minPrice") || "0");
//   const maxPrice = Number.parseInt(searchParams.get("maxPrice") || "200");
//   const inStock = searchParams.get("inStock") === "true";
//   const onSale = searchParams.get("onSale") === "true";

//   // Fetch products from API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:8000/products/");
//         if (!res.ok) throw new Error("Failed to fetch products");
//         const data = await res.json();
//         setProducts(data);
//       } catch (err: any) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Filter products based on query params
//   const filteredProducts = products.filter((product) => {
//     if (category && category !== "all" && product.category !== category)
//       return false;
//     if (petType && petType !== "all" && product.petType !== petType)
//       return false;
//     if (
//       query &&
//       !product.name.toLowerCase().includes(query.toLowerCase()) &&
//       !product.description.toLowerCase().includes(query.toLowerCase()) &&
//       !product.brand.toLowerCase().includes(query.toLowerCase())
//     )
//       return false;
//     if (product.price < minPrice || product.price > maxPrice) return false;
//     if (inStock && !product.inStock) return false;
//     if (onSale && !product.discountPrice) return false;
//     return true;
//   });

//   const handleAddToCart = (product: any) => {
//     if (!product.inStock) return;

//     addItem({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//     });

//     toast({
//       title: "Added to cart",
//       description: `${product.name} has been added to your cart.`,
//     });
//   };

//   const handleToggleFavorite = (id: string, name: string) => {
//     toggleFavorite(id);

//     toast({
//       title: isFavorite(id) ? "Removed from favorites" : "Added to favorites",
//       description: isFavorite(id)
//         ? `${name} has been removed from your favorites.`
//         : `${name} has been added to your favorites.`,
//     });
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-lg font-medium">Loading products...</h3>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-lg font-medium text-destructive">{error}</h3>
//         <p className="text-muted-foreground mt-2">Please try again later.</p>
//       </div>
//     );
//   }

//   if (filteredProducts.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-lg font-medium">No products found</h3>
//         <p className="text-muted-foreground mt-2">
//           Try adjusting your search filters
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {filteredProducts.map((product) => (
//         <Card key={product.id} className="overflow-hidden">
//           <div className="relative">
//             <div className="aspect-square relative overflow-hidden">
//               <Image
//                 src={product.image || "/placeholder.svg"}
//                 alt={product.name}
//                 fill
//                 className="object-contain p-4 transition-transform hover:scale-105"
//               />
//               {product.discountPrice && (
//                 <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//                   SALE
//                 </div>
//               )}
//               {!product.inStock && (
//                 <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
//                   <p className="font-semibold text-muted-foreground">
//                     Out of Stock
//                   </p>
//                 </div>
//               )}
//             </div>
//             <Button
//               variant="ghost"
//               size="icon"
//               className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full ${
//                 isFavorite(product.id) ? "text-red-500 hover:text-red-600" : ""
//               }`}
//               onClick={() => handleToggleFavorite(product.id, product.name)}
//             >
//               <Heart
//                 className={`h-5 w-5 ${
//                   isFavorite(product.id) ? "fill-current" : ""
//                 }`}
//               />
//               <span className="sr-only">
//                 {isFavorite(product.id)
//                   ? "Remove from favorites"
//                   : "Add to favorites"}
//               </span>
//             </Button>
//           </div>
//           <CardContent className="p-4">
//             <div>
//               <div className="flex justify-between items-start">
//                 <Badge variant="outline" className="mb-2">
//                   {product.category}
//                 </Badge>
//                 {product.rating && (
//                   <div className="flex items-center">
//                     <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
//                     <span className="text-xs ml-1">{product.rating}</span>
//                   </div>
//                 )}
//               </div>
//               <h3 className="font-semibold text-lg line-clamp-1">
//                 {product.name}
//               </h3>
//               <p className="text-sm text-muted-foreground line-clamp-1">
//                 {product.brand}
//               </p>
//               <div className="mt-2 flex items-baseline gap-2">
//                 <span className="font-bold">
//                   ${Number(product.price).toFixed(2)}
//                 </span>
//                 {product.discountPrice && (
//                   <span className="text-sm text-muted-foreground line-through">
//                     ${Number(product.discountPrice).toFixed(2)}
//                   </span>
//                 )}
//                 {product.discountPrice && (
//                   <span className="text-sm text-muted-foreground line-through">
//                     ${product.discountPrice.toFixed(2)}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="p-4 pt-0 flex gap-2">
//             <Link href={`/marketplace/${product.id}`} className="flex-1">
//               <Button variant="outline" className="w-full">
//                 Details
//               </Button>
//             </Link>
//             <Button
//               size="icon"
//               className="flex-none"
//               disabled={!product.inStock}
//               onClick={() => handleAddToCart(product)}
//             >
//               <ShoppingCart className="h-4 w-4" />
//               <span className="sr-only">Add to cart</span>
//             </Button>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//   );
// }
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useCartStore } from "@/lib/cart-store";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  petType: string;
  price: number;
  discountPrice?: number | null;
  rating?: number | null;
  inStock: boolean;
  image?: string;
}

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const { addItem, toggleFavorite, isFavorite } = useCartStore();

  const category = searchParams.get("category") || "";
  const petType = searchParams.get("petType") || "";
  const query = searchParams.get("q") || "";
  const minPrice = Number.parseInt(searchParams.get("minPrice") || "0");
  const maxPrice = Number.parseInt(searchParams.get("maxPrice") || "200");
  const inStock = searchParams.get("inStock") === "true";
  const onSale = searchParams.get("onSale") === "true";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API and normalize data
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:8000/products/");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        // Normalize data: convert price fields to numbers, inStock to boolean
        const normalized: Product[] = data.map((p: any) => ({
          ...p,
          price: Number(p.price),
          discountPrice: p.discountPrice ? Number(p.discountPrice) : null,
          rating: p.rating ? Number(p.rating) : null,
          inStock: "true",
        }));

        setProducts(normalized);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Filter products based on search params
  const filteredProducts = products.filter((product) => {
    if (category && category !== "all" && product.category !== category)
      return false;
    if (petType && petType !== "all" && product.petType !== petType)
      return false;
    if (
      query &&
      !product.name.toLowerCase().includes(query.toLowerCase()) &&
      !product.description.toLowerCase().includes(query.toLowerCase()) &&
      !product.brand.toLowerCase().includes(query.toLowerCase())
    )
      return false;
    if (product.price < minPrice || product.price > maxPrice) return false;
    if (inStock && !product.inStock) return false;
    if (onSale && !product.discountPrice) return false;
    return true;
  });

  const handleAddToCart = (product: Product) => {
    if (!product.inStock) return;

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleToggleFavorite = (id: string, name: string) => {
    toggleFavorite(id);

    toast({
      title: isFavorite(id) ? "Removed from favorites" : "Added to favorites",
      description: isFavorite(id)
        ? `${name} has been removed from your favorites.`
        : `${name} has been added to your favorites.`,
    });
  };

  if (loading) {
    return <p className="text-center py-12">Loading products...</p>;
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">
          Try adjusting your search filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
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
                  <p className="font-semibold text-muted-foreground">
                    Out of Stock
                  </p>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full ${
                isFavorite(product.id) ? "text-red-500 hover:text-red-600" : ""
              }`}
              onClick={() => handleToggleFavorite(product.id, product.name)}
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite(product.id) ? "fill-current" : ""
                }`}
              />
              <span className="sr-only">
                {isFavorite(product.id)
                  ? "Remove from favorites"
                  : "Add to favorites"}
              </span>
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
              <h3 className="font-semibold text-lg line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {product.brand}
              </p>
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
  );
}
