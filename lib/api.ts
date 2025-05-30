const API_BASE_URL = "http://localhost:8000"

// Generic API function with error handling
async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, defaultOptions)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error)

    // Check if it's a network error (API server not running)
    if (error instanceof TypeError && error.message === "fetch failed") {
      console.warn(`API server appears to be unavailable. Using fallback data for ${endpoint}`)
      throw new Error(`API_UNAVAILABLE: ${endpoint}`)
    }

    throw error
  }
}

// Pet API functions with fallback
export const petApi = {
  // Get all pets
  getAll: async () => {
    try {
      return await apiRequest<Pet[]>("/pets/")
    } catch (error) {
      if (error instanceof Error && error.message.includes("API_UNAVAILABLE")) {
        console.log("Using fallback pet data")
        return getFallbackPets()
      }
      throw error
    }
  },

  // Get pet by ID
  getById: async (id: string) => {
    try {
      return await apiRequest<Pet>(`/pets/${id}/`)
    } catch (error) {
      if (error instanceof Error && error.message.includes("API_UNAVAILABLE")) {
        console.log(`Using fallback data for pet ${id}`)
        const fallbackPets = getFallbackPets()
        return fallbackPets.find((pet) => pet.id.toString() === id) || null
      }
      throw error
    }
  },

  // Create new pet
  create: (pet: Omit<Pet, "id">) =>
    apiRequest<Pet>("/pets/", {
      method: "POST",
      body: JSON.stringify(pet),
    }),

  // Update pet
  update: (id: string, pet: Partial<Pet>) =>
    apiRequest<Pet>(`/pets/${id}/`, {
      method: "PUT",
      body: JSON.stringify(pet),
    }),

  // Partial update pet
  partialUpdate: (id: string, pet: Partial<Pet>) =>
    apiRequest<Pet>(`/pets/${id}/`, {
      method: "PATCH",
      body: JSON.stringify(pet),
    }),

  // Delete pet
  delete: (id: string) =>
    apiRequest<void>(`/pets/${id}/`, {
      method: "DELETE",
    }),
}

// Product API functions with fallback
export const productApi = {
  // Get all products
  getAll: async () => {
    try {
      return await apiRequest<Product[]>("/products/")
    } catch (error) {
      if (error instanceof Error && error.message.includes("API_UNAVAILABLE")) {
        console.log("Using fallback product data")
        return getFallbackProducts()
      }
      throw error
    }
  },

  // Get product by ID
  getById: async (id: string) => {
    try {
      return await apiRequest<Product>(`/products/${id}/`)
    } catch (error) {
      if (error instanceof Error && error.message.includes("API_UNAVAILABLE")) {
        console.log(`Using fallback data for product ${id}`)
        const fallbackProducts = getFallbackProducts()
        return fallbackProducts.find((product) => product.id.toString() === id) || null
      }
      throw error
    }
  },

  // Create new product
  create: (product: Omit<Product, "id">) =>
    apiRequest<Product>("/products/", {
      method: "POST",
      body: JSON.stringify(product),
    }),

  // Update product
  update: (id: string, product: Partial<Product>) =>
    apiRequest<Product>(`/products/${id}/`, {
      method: "PUT",
      body: JSON.stringify(product),
    }),

  // Partial update product
  partialUpdate: (id: string, product: Partial<Product>) =>
    apiRequest<Product>(`/products/${id}/`, {
      method: "PATCH",
      body: JSON.stringify(product),
    }),

  // Delete product
  delete: (id: string) =>
    apiRequest<void>(`/products/${id}/`, {
      method: "DELETE",
    }),
}

// Veterinarian API functions with fallback
export const veterinarianApi = {
  // Get all veterinarians
  getAll: async () => {
    try {
      return await apiRequest<Veterinarian[]>("/veterinarians/")
    } catch (error) {
      if (error instanceof Error && error.message.includes("API_UNAVAILABLE")) {
        console.log("Using fallback veterinarian data")
        return getFallbackVeterinarians()
      }
      throw error
    }
  },

  // Get veterinarian by ID
  getById: async (id: string) => {
    try {
      return await apiRequest<Veterinarian>(`/veterinarians/${id}/`)
    } catch (error) {
      if (error instanceof Error && error.message.includes("API_UNAVAILABLE")) {
        console.log(`Using fallback data for veterinarian ${id}`)
        const fallbackVets = getFallbackVeterinarians()
        return fallbackVets.find((vet) => vet.id.toString() === id) || null
      }
      throw error
    }
  },

  // Create new veterinarian
  create: (vet: Omit<Veterinarian, "id">) =>
    apiRequest<Veterinarian>("/veterinarians/", {
      method: "POST",
      body: JSON.stringify(vet),
    }),

  // Update veterinarian
  update: (id: string, vet: Partial<Veterinarian>) =>
    apiRequest<Veterinarian>(`/veterinarians/${id}/`, {
      method: "PUT",
      body: JSON.stringify(vet),
    }),

  // Partial update veterinarian
  partialUpdate: (id: string, vet: Partial<Veterinarian>) =>
    apiRequest<Veterinarian>(`/veterinarians/${id}/`, {
      method: "PATCH",
      body: JSON.stringify(vet),
    }),

  // Delete veterinarian
  delete: (id: string) =>
    apiRequest<void>(`/veterinarians/${id}/`, {
      method: "DELETE",
    }),
}

// Adopter API functions
export const adopterApi = {
  // Get all adopters
  getAll: () => apiRequest<Adopter[]>("/adopters/"),

  // Get adopter by ID
  getById: (id: string) => apiRequest<Adopter>(`/adopters/${id}/`),

  // Create new adopter
  create: (adopter: Omit<Adopter, "id">) =>
    apiRequest<Adopter>("/adopters/", {
      method: "POST",
      body: JSON.stringify(adopter),
    }),

  // Update adopter
  update: (id: string, adopter: Partial<Adopter>) =>
    apiRequest<Adopter>(`/adopters/${id}/`, {
      method: "PUT",
      body: JSON.stringify(adopter),
    }),

  // Partial update adopter
  partialUpdate: (id: string, adopter: Partial<Adopter>) =>
    apiRequest<Adopter>(`/adopters/${id}/`, {
      method: "PATCH",
      body: JSON.stringify(adopter),
    }),

  // Delete adopter
  delete: (id: string) =>
    apiRequest<void>(`/adopters/${id}/`, {
      method: "DELETE",
    }),
}

// Adoption Application API functions
export const adoptionApplicationApi = {
  // Get all adoption applications
  getAll: () => apiRequest<AdoptionApplication[]>("/adoption-applications/"),

  // Get adoption application by ID
  getById: (id: string) => apiRequest<AdoptionApplication>(`/adoption-applications/${id}/`),

  // Create new adoption application
  create: (application: Omit<AdoptionApplication, "id">) =>
    apiRequest<AdoptionApplication>("/adoption-applications/", {
      method: "POST",
      body: JSON.stringify(application),
    }),

  // Update adoption application
  update: (id: string, application: Partial<AdoptionApplication>) =>
    apiRequest<AdoptionApplication>(`/adoption-applications/${id}/`, {
      method: "PUT",
      body: JSON.stringify(application),
    }),

  // Partial update adoption application
  partialUpdate: (id: string, application: Partial<AdoptionApplication>) =>
    apiRequest<AdoptionApplication>(`/adoption-applications/${id}/`, {
      method: "PATCH",
      body: JSON.stringify(application),
    }),

  // Delete adoption application
  delete: (id: string) =>
    apiRequest<void>(`/adoption-applications/${id}/`, {
      method: "DELETE",
    }),
}

// Fallback data functions
function getFallbackPets(): Pet[] {
  return [
    {
      id: "1",
      name: "Buddy",
      pet_type: "Dog",
      type: "Dog",
      breed: "Labrador Retriever",
      age: 3,
      gender: "Male",
      size: "Large",
      color: "Golden",
      vaccinated: true,
      neutered: true,
      good_with_kids: true,
      goodWithKids: true,
      description: "Buddy is a friendly and energetic Labrador who loves to play fetch and go on long walks.",
      personality: "Friendly, energetic, loyal",
      location: "San Francisco, CA",
      address: "123 Pet Shelter St, San Francisco, CA 94102",
      image: "/placeholder.svg?height=400&width=400",
      additional_images: [],
      additionalImages: [],
    },
    {
      id: "2",
      name: "Luna",
      pet_type: "Cat",
      type: "Cat",
      breed: "Siamese",
      age: 2,
      gender: "Female",
      size: "Medium",
      color: "Cream and Brown",
      vaccinated: true,
      neutered: true,
      good_with_kids: true,
      goodWithKids: true,
      description: "Luna is a gentle and affectionate Siamese cat who loves to cuddle and purr.",
      personality: "Gentle, affectionate, calm",
      location: "Los Angeles, CA",
      address: "456 Animal Rescue Ave, Los Angeles, CA 90210",
      image: "/placeholder.svg?height=400&width=400",
      additional_images: [],
      additionalImages: [],
    },
    {
      id: "3",
      name: "Charlie",
      pet_type: "Dog",
      type: "Dog",
      breed: "Beagle",
      age: 5,
      gender: "Male",
      size: "Medium",
      color: "Brown and White",
      vaccinated: true,
      neutered: true,
      good_with_kids: true,
      goodWithKids: true,
      description: "Charlie is a sweet and gentle Beagle who gets along well with children and other pets.",
      personality: "Sweet, gentle, social",
      location: "New York, NY",
      address: "789 Pet Haven Rd, New York, NY 10001",
      image: "/placeholder.svg?height=400&width=400",
      additional_images: [],
      additionalImages: [],
    },
  ]
}

function getFallbackProducts(): Product[] {
  return [
    {
      id: "1",
      name: "Premium Dog Food",
      category: "food",
      pet_type: "dog",
      petType: "dog",
      brand: "PetNutrition",
      price: 45.99,
      discount_price: null,
      discountPrice: null,
      description: "High-quality dry dog food made with real chicken and vegetables.",
      weight: "15 lbs",
      dimensions: "12 x 8 x 4 inches",
      material: "Chicken, Rice, Vegetables",
      image: "/placeholder.svg?height=400&width=400",
      in_stock: true,
      inStock: true,
      rating: 4.5,
      additional_images: [],
      additionalImages: [],
      reviews: [
        {
          name: "Sarah M.",
          rating: 5,
          date: "2024-01-15",
          comment: "My dog loves this food! Great quality ingredients.",
        },
      ],
    },
    {
      id: "2",
      name: "Interactive Cat Toy",
      category: "toys",
      pet_type: "cat",
      petType: "cat",
      brand: "FelinePlay",
      price: 19.99,
      discount_price: 15.99,
      discountPrice: 15.99,
      description: "Electronic toy that keeps cats entertained for hours.",
      weight: "0.5 lbs",
      dimensions: "6 x 6 x 3 inches",
      material: "Plastic, Electronics",
      image: "/placeholder.svg?height=400&width=400",
      in_stock: true,
      inStock: true,
      rating: 4.2,
      additional_images: [],
      additionalImages: [],
      reviews: [
        {
          name: "Mike T.",
          rating: 4,
          date: "2024-01-10",
          comment: "My cat is obsessed with this toy!",
        },
      ],
    },
    {
      id: "3",
      name: "Comfortable Dog Bed",
      category: "accessories",
      pet_type: "dog",
      petType: "dog",
      brand: "ComfyPet",
      price: 79.99,
      discount_price: null,
      discountPrice: null,
      description: "Orthopedic dog bed with memory foam for ultimate comfort.",
      weight: "3 lbs",
      dimensions: "36 x 24 x 4 inches",
      material: "Memory Foam, Fabric",
      image: "/placeholder.svg?height=400&width=400",
      in_stock: false,
      inStock: false,
      rating: 4.8,
      additional_images: [],
      additionalImages: [],
      reviews: [
        {
          name: "Lisa K.",
          rating: 5,
          date: "2024-01-05",
          comment: "Best bed we've ever bought for our dog!",
        },
      ],
    },
  ]
}

function getFallbackVeterinarians(): Veterinarian[] {
  return [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      clinic: "Happy Paws Veterinary Clinic",
      specialties: ["general", "dental"],
      rating: 4.8,
      review_count: 127,
      reviewCount: 127,
      address: "123 Main St, San Francisco, CA 94102",
      location: "San Francisco, CA",
      phone: "(415) 555-0123",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      image: "/placeholder.svg?height=400&width=400",
      description: "Dr. Johnson has over 10 years of experience in veterinary medicine.",
      next_available: "Today",
      nextAvailable: "Today",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      clinic: "Pet Care Center",
      specialties: ["surgery", "emergency"],
      rating: 4.9,
      review_count: 89,
      reviewCount: 89,
      address: "456 Oak Ave, Los Angeles, CA 90210",
      location: "Los Angeles, CA",
      phone: "(323) 555-0456",
      hours: "Mon-Sun: 24/7 Emergency",
      image: "/placeholder.svg?height=400&width=400",
      description: "Specializing in emergency care and surgical procedures.",
      next_available: "Tomorrow",
      nextAvailable: "Tomorrow",
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      clinic: "Animal Wellness Hospital",
      specialties: ["dermatology", "general"],
      rating: 4.7,
      review_count: 156,
      reviewCount: 156,
      address: "789 Pine St, New York, NY 10001",
      location: "New York, NY",
      phone: "(212) 555-0789",
      hours: "Mon-Fri: 7AM-7PM, Sat-Sun: 9AM-5PM",
      image: "/placeholder.svg?height=400&width=400",
      description: "Expert in dermatology and general veterinary care.",
      next_available: "Next Week",
      nextAvailable: "Next Week",
    },
  ]
}

// Type definitions matching Django API response format
export interface Pet {
  id: number | string
  name: string
  pet_type: string // Django field name
  breed: string
  age: number
  gender: string
  size: string
  color: string
  vaccinated: boolean
  neutered: boolean
  good_with_kids: boolean // Django field name
  description: string
  personality: string
  location: string
  address: string
  image: string
  additional_images?: string[] // Django field name
  // Frontend compatibility properties
  type?: string
  goodWithKids?: boolean
  additionalImages?: string[]
}

export interface Product {
  id: number | string
  name: string
  category: string
  pet_type: string // Django field name
  brand: string
  price: number
  discount_price?: number // Django field name
  description: string
  weight: string
  dimensions: string
  material: string
  image: string
  in_stock: boolean // Django field name
  rating: number
  additional_images?: string[] // Django field name
  reviews?: ProductReview[]
  // Frontend compatibility properties
  petType?: string
  discountPrice?: number
  inStock?: boolean
  additionalImages?: string[]
}

export interface ProductReview {
  name: string
  rating: number
  date: string
  comment: string
}

export interface Veterinarian {
  id: number | string
  name: string
  clinic: string
  specialties: string[]
  rating: number
  review_count: number // Django field name
  address: string
  location: string
  phone: string
  hours: string
  image: string
  description?: string
  next_available?: string // Django field name
  // Frontend compatibility properties
  reviewCount?: number
  nextAvailable?: string
}

export interface Adopter {
  id: number | string
  name: string
  email: string
  phone: string
  address: string
  home_type: string // Django field name
  has_children: boolean // Django field name
  has_pets: boolean // Django field name
  experience: string
  // Frontend compatibility properties
  homeType?: string
  hasChildren?: boolean
  hasPets?: boolean
}

export interface AdoptionApplication {
  id: number | string
  pet_id: number | string // Django field name
  adopter_id: number | string // Django field name
  status: "pending" | "approved" | "rejected"
  submitted_at: string // Django field name
  reason: string
  terms: boolean
  // Frontend compatibility properties
  petId?: number | string
  adopterId?: number | string
  submittedAt?: string
}

// Helper functions to normalize Django API responses for frontend use
export function normalizePet(pet: Pet): Pet {
  if (!pet || typeof pet !== "object") {
    console.error("Invalid pet object:", pet)
    throw new Error("Invalid pet object")
  }

  // Create a new object with all properties from the original pet
  const normalizedPet = { ...pet }

  // Ensure id is a string
  normalizedPet.id = pet.id?.toString() || ""

  // Add frontend-compatible properties
  normalizedPet.type = pet.pet_type?.toString() || ""
  normalizedPet.goodWithKids = !!pet.good_with_kids
  normalizedPet.additionalImages = Array.isArray(pet.additional_images) ? pet.additional_images : []

  return normalizedPet
}

export function normalizeProduct(product: Product): Product {
  return {
    ...product,
    id: product.id.toString(),
    petType: product.pet_type,
    discountPrice: product.discount_price,
    inStock: product.in_stock,
    additionalImages: product.additional_images || [],
  }
}

export function normalizeVeterinarian(vet: Veterinarian): Veterinarian {
  return {
    ...vet,
    id: vet.id.toString(),
    reviewCount: vet.review_count,
    nextAvailable: vet.next_available,
  }
}

export function normalizeAdopter(adopter: Adopter): Adopter {
  return {
    ...adopter,
    id: adopter.id.toString(),
    homeType: adopter.home_type,
    hasChildren: adopter.has_children,
    hasPets: adopter.has_pets,
  }
}

export function normalizeAdoptionApplication(app: AdoptionApplication): AdoptionApplication {
  return {
    ...app,
    id: app.id.toString(),
    petId: app.pet_id.toString(),
    adopterId: app.adopter_id.toString(),
    submittedAt: app.submitted_at,
  }
}
