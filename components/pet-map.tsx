"use client"

import { useEffect, useRef } from "react"

interface PetMapProps {
  location: string
  address: string
}

export default function PetMap({ location, address }: PetMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for Google Maps integration
    // In a real application, you would use the Google Maps API
    if (mapRef.current) {
      const mapElement = mapRef.current

      // Add a placeholder map with styling
      mapElement.innerHTML = `
        <div class="h-full w-full flex items-center justify-center bg-muted/50 rounded-md">
          <div class="text-center p-4">
            <p class="font-medium">Map Location</p>
            <p class="text-sm text-muted-foreground">${location}</p>
            <p class="text-xs mt-2">${address}</p>
            <p class="text-xs mt-4 text-muted-foreground">Google Maps integration would be implemented here</p>
          </div>
        </div>
      `
    }
  }, [location, address])

  return <div ref={mapRef} className="h-[300px] w-full rounded-md overflow-hidden"></div>
}
