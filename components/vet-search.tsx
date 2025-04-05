"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"

export default function VetSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [specialty, setSpecialty] = useState(searchParams.get("specialty") || "")
  const [location, setLocation] = useState(searchParams.get("location") || "")

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams)

    if (specialty) params.set("specialty", specialty)
    else params.delete("specialty")

    if (location) params.set("location", location)
    else params.delete("location")

    router.push(`/veterinary?${params.toString()}`)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1 relative">
        <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Enter your location"
          className="pl-8"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <Select value={specialty} onValueChange={setSpecialty}>
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Specialty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Specialties</SelectItem>
          <SelectItem value="general">General Practice</SelectItem>
          <SelectItem value="dental">Dental</SelectItem>
          <SelectItem value="surgery">Surgery</SelectItem>
          <SelectItem value="emergency">Emergency</SelectItem>
          <SelectItem value="dermatology">Dermatology</SelectItem>
        </SelectContent>
      </Select>

      <Button onClick={handleSearch}>
        <Search className="h-4 w-4 mr-2" />
        Find Vets
      </Button>
    </div>
  )
}

