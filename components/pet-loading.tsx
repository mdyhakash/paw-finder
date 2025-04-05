"use client"

import { PawPrintIcon as Paw } from "lucide-react"

export default function PetLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
        <Paw className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-primary" />
      </div>
      <p className="mt-4 text-muted-foreground">Fetching adorable companions...</p>
    </div>
  )
}

