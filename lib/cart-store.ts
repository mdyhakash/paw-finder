import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type CartStore = {
  items: CartItem[]
  favorites: string[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  getTotalItems: () => number
  getTotalPrice: () => number
  getFavoritesCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      favorites: [],

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)

          if (existingItem) {
            return {
              items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)),
            }
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
          }
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i)),
        })),

      clearCart: () => set({ items: [] }),

      toggleFavorite: (id) =>
        set((state) => {
          // Ensure we're working with strings only
          if (typeof id !== "string") return state

          const currentFavorites = state.favorites.filter((fav): fav is string => typeof fav === "string")
          const isFavorited = currentFavorites.includes(id)

          if (isFavorited) {
            return {
              favorites: currentFavorites.filter((itemId) => itemId !== id),
            }
          } else {
            return {
              favorites: [...currentFavorites, id],
            }
          }
        }),

      isFavorite: (id) => {
        const validFavorites = get().favorites.filter((fav): fav is string => typeof fav === "string")
        return validFavorites.includes(id)
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      getFavoritesCount: () => {
        const validFavorites = get().favorites.filter((fav): fav is string => typeof fav === "string")
        return validFavorites.length
      },
    }),
    {
      name: "pawfinder-cart",
    },
  ),
)
