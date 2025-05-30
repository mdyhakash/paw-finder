import {
  petApi,
  productApi,
  veterinarianApi,
  normalizePet,
  normalizeProduct,
  normalizeVeterinarian,
  type Pet,
  type Product,
  type Veterinarian,
} from "./api"

// Pet types - make sure these match the API values exactly
export const petTypes = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Small Pet"]

// Breeds
export const breeds = [
  { id: 1, name: "Labrador Retriever", petType: "Dog" },
  { id: 2, name: "German Shepherd", petType: "Dog" },
  { id: 3, name: "Golden Retriever", petType: "Dog" },
  { id: 4, name: "French Bulldog", petType: "Dog" },
  { id: 5, name: "Beagle", petType: "Dog" },
  { id: 6, name: "Poodle", petType: "Dog" },
  { id: 7, name: "Siamese", petType: "Cat" },
  { id: 8, name: "Persian", petType: "Cat" },
  { id: 9, name: "Maine Coon", petType: "Cat" },
  { id: 10, name: "Ragdoll", petType: "Cat" },
  { id: 11, name: "Bengal", petType: "Cat" },
  { id: 12, name: "Sphynx", petType: "Cat" },
  { id: 13, name: "Parakeet", petType: "Bird" },
  { id: 14, name: "Cockatiel", petType: "Bird" },
  { id: 15, name: "Canary", petType: "Bird" },
  { id: 16, name: "Holland Lop", petType: "Rabbit" },
  { id: 17, name: "Netherland Dwarf", petType: "Rabbit" },
  { id: 18, name: "Goldfish", petType: "Fish" },
  { id: 19, name: "Betta", petType: "Fish" },
  { id: 20, name: "Hamster", petType: "Small Pet" },
  { id: 21, name: "Guinea Pig", petType: "Small Pet" },
]

// Cache for API responses
let petsCache: Pet[] | null = null
let productsCache: Product[] | null = null
let vetsCache: Veterinarian[] | null = null

// Export functions to get data from API
export async function getPets(): Promise<Pet[]> {
  try {
    if (!petsCache) {
      const rawPets = await petApi.getAll()
     /// console.log("Raw pets from API:", rawPets)

      // Handle both array and object responses
      if (Array.isArray(rawPets)) {
        petsCache = rawPets.map((pet) => {
          try {
            return normalizePet(pet)
          } catch (err) {
            console.error("Error normalizing pet:", err, pet)
            // Return a minimal valid pet object if normalization fails
            return {
              id: pet.id?.toString() || "",
              name: pet.name?.toString() || "",
              pet_type: pet.pet_type?.toString() || "",
              type: pet.pet_type?.toString() || "",
              breed: pet.breed?.toString() || "",
              age: typeof pet.age === "number" ? pet.age : 0,
              gender: pet.gender?.toString() || "",
              size: pet.size?.toString() || "",
              color: pet.color?.toString() || "",
              vaccinated: !!pet.vaccinated,
              neutered: !!pet.neutered,
              good_with_kids: !!pet.good_with_kids,
              goodWithKids: !!pet.good_with_kids,
              description: pet.description?.toString() || "",
              personality: pet.personality?.toString() || "",
              location: pet.location?.toString() || "",
              address: pet.address?.toString() || "",
              image: pet.image?.toString() || "/placeholder.svg",
            }
          }
        })
      } else if (rawPets && typeof rawPets === "object") {
        // If the API returns a single object instead of an array
        console.warn("API returned an object instead of an array for pets")
        petsCache = []
      } else {
        console.error("Unexpected API response format for pets:", rawPets)
        petsCache = []
      }
    }
    return petsCache || []
  } catch (error) {
    console.error("Failed to fetch pets:", error)
    return []
  }
}

export async function getPetById(id: string): Promise<Pet | undefined> {
  try {
    const rawPet = await petApi.getById(id)
    if (!rawPet) return undefined
    return normalizePet(rawPet)
  } catch (error) {
    console.error(`Failed to fetch pet ${id}:`, error)
    // Try to get from cache or fallback data
    const allPets = await getPets()
    return allPets.find((pet) => pet.id.toString() === id)
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    if (!productsCache) {
      const rawProducts = await productApi.getAll()
      if (Array.isArray(rawProducts)) {
        productsCache = rawProducts.map((product) => {
          try {
            return normalizeProduct(product)
          } catch (err) {
            console.error("Error normalizing product:", err, product)
            // Return a minimal valid product object if normalization fails
            return {
              id: product.id?.toString() || "",
              name: product.name?.toString() || "",
              category: product.category?.toString() || "",
              pet_type: product.pet_type?.toString() || "",
              petType: product.pet_type?.toString() || "",
              brand: product.brand?.toString() || "",
              price: typeof product.price === "number" ? product.price : 0,
              discount_price: product.discount_price || null,
              discountPrice: product.discount_price || null,
              description: product.description?.toString() || "",
              weight: product.weight?.toString() || "",
              dimensions: product.dimensions?.toString() || "",
              material: product.material?.toString() || "",
              image: product.image?.toString() || "/placeholder.svg",
              in_stock: !!product.in_stock,
              inStock: !!product.in_stock,
              rating: typeof product.rating === "number" ? product.rating : 0,
              additional_images: product.additional_images || [],
              additionalImages: product.additional_images || [],
              reviews: product.reviews || [],
            }
          }
        })
      } else {
        console.warn("API returned unexpected format for products")
        productsCache = []
      }
    }
    return productsCache || []
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return []
  }
}

export async function getProductById(id: string): Promise<Product | undefined> {
  try {
    const rawProduct = await productApi.getById(id)
    if (!rawProduct) return undefined
    return normalizeProduct(rawProduct)
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error)
    // Try to get from cache or fallback data
    const allProducts = await getProducts()
    return allProducts.find((product) => product.id.toString() === id)
  }
}

export async function getVets(): Promise<Veterinarian[]> {
  try {
    if (!vetsCache) {
      const rawVets = await veterinarianApi.getAll()
      if (Array.isArray(rawVets)) {
        vetsCache = rawVets.map((vet) => {
          try {
            return normalizeVeterinarian(vet)
          } catch (err) {
            console.error("Error normalizing veterinarian:", err, vet)
            // Return a minimal valid vet object if normalization fails
            return {
              id: vet.id?.toString() || "",
              name: vet.name?.toString() || "",
              clinic: vet.clinic?.toString() || "",
              specialties: Array.isArray(vet.specialties) ? vet.specialties : [],
              rating: typeof vet.rating === "number" ? vet.rating : 0,
              review_count: typeof vet.review_count === "number" ? vet.review_count : 0,
              reviewCount: typeof vet.review_count === "number" ? vet.review_count : 0,
              address: vet.address?.toString() || "",
              location: vet.location?.toString() || "",
              phone: vet.phone?.toString() || "",
              hours: vet.hours?.toString() || "",
              image: vet.image?.toString() || "/placeholder.svg",
              description: vet.description?.toString() || "",
              next_available: vet.next_available?.toString() || "",
              nextAvailable: vet.next_available?.toString() || "",
            }
          }
        })
      } else {
        console.warn("API returned unexpected format for veterinarians")
        vetsCache = []
      }
    }
    return vetsCache || []
  } catch (error) {
    console.error("Failed to fetch veterinarians:", error)
    return []
  }
}

export async function getVetById(id: string): Promise<Veterinarian | undefined> {
  try {
    const rawVet = await veterinarianApi.getById(id)
    if (!rawVet) return undefined
    return normalizeVeterinarian(rawVet)
  } catch (error) {
    console.error(`Failed to fetch veterinarian ${id}:`, error)
    // Try to get from cache or fallback data
    const allVets = await getVets()
    return allVets.find((vet) => vet.id.toString() === id)
  }
}

// Clear cache functions (useful when data is updated)
export function clearPetsCache() {
  petsCache = null
}

export function clearProductsCache() {
  productsCache = null
}

export function clearVetsCache() {
  vetsCache = null
}

export function clearAllCache() {
  clearPetsCache()
  clearProductsCache()
  clearVetsCache()
}

// Re-export types for convenience
export type { Pet, Product, Veterinarian }
