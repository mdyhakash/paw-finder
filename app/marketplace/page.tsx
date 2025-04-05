import { Suspense } from "react"
import ProductSearch from "@/components/product-search"
import ProductGrid from "@/components/product-grid"
import PetLoading from "@/components/pet-loading"
import { SearchParamsProvider } from "@/components/search-params-provider"

export default function MarketplacePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Pet Marketplace</h1>

      <SearchParamsProvider>
        <ProductSearch />
        <Suspense fallback={<PetLoading />}>
          <ProductGrid />
        </Suspense>
      </SearchParamsProvider>
    </main>
  )
}

