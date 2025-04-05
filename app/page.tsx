import { Suspense } from "react"
import PetSearch from "@/components/pet-search"
import PetGrid from "@/components/pet-grid"
import PetLoading from "@/components/pet-loading"
import { SearchParamsProvider } from "@/components/search-params-provider"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Find Your Perfect Companion</h1>
      <SearchParamsProvider>
        <PetSearch />
        <Suspense fallback={<PetLoading />}>
          <PetGrid />
        </Suspense>
      </SearchParamsProvider>
    </main>
  )
}

