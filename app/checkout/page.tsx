import type { Metadata } from "next"
import CheckoutContent from "@/components/checkout-content"

export const metadata: Metadata = {
  title: "Checkout - PawFinder",
  description: "Complete your purchase of pet products",
}

export default function CheckoutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Checkout</h1>
      <CheckoutContent />
    </main>
  )
}
