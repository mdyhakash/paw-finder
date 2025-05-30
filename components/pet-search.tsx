"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { petTypes, breeds } from "@/lib/data"

export default function PetSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Initialize state from URL parameters
  const [type, setType] = useState(searchParams.get("type") || "all")
  const [breed, setBreed] = useState(searchParams.get("breed") || "all")
  const [location, setLocation] = useState(searchParams.get("location") || "")
  const [age, setAge] = useState<number[]>([
    Number.parseInt(searchParams.get("minAge") || "0"),
    Number.parseInt(searchParams.get("maxAge") || "15"),
  ])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter breeds based on selected pet type
  const filteredBreeds =
    type && type !== "all" ? breeds.filter((b) => b.petType.toLowerCase() === type.toLowerCase()) : breeds

  // Update URL with search parameters
  const handleSearch = () => {
    const params = new URLSearchParams()

    if (type && type !== "all") params.set("type", type)
    if (breed && breed !== "all") params.set("breed", breed)
    if (location) params.set("location", location)

    params.set("minAge", age[0].toString())
    params.set("maxAge", age[1].toString())

    console.log("Setting search params:", Object.fromEntries(params.entries()))
    router.push(`/?${params.toString()}`)
    setIsFilterOpen(false)
  }

  // Reset all filters
  const handleReset = () => {
    setType("all")
    setBreed("all")
    setLocation("")
    setAge([0, 15])
    router.push("/")
    setIsFilterOpen(false)
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by location..."
                className="pl-8"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch()
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:flex gap-4">
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Pet Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {petTypes.map((petType) => (
                  <SelectItem key={petType} value={petType}>
                    {petType}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={breed} onValueChange={setBreed}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Breed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Breeds</SelectItem>
                {filteredBreeds.map((breedItem) => (
                  <SelectItem key={breedItem.id} value={breedItem.name}>
                    {breedItem.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:w-auto">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Pets</SheetTitle>
                  <SheetDescription>Adjust filters to find your perfect companion</SheetDescription>
                </SheetHeader>
                <div className="space-y-6 py-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Pet Type</h3>
                    <Select value={type} onValueChange={setType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {petTypes.map((petType) => (
                          <SelectItem key={petType} value={petType}>
                            {petType}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Breed</h3>
                    <Select value={breed} onValueChange={setBreed}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select breed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Breeds</SelectItem>
                        {filteredBreeds.map((breedItem) => (
                          <SelectItem key={breedItem.id} value={breedItem.name}>
                            {breedItem.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium">Age Range</h3>
                      <span className="text-sm text-muted-foreground">
                        {age[0]} - {age[1]} years
                      </span>
                    </div>
                    <Slider defaultValue={age} min={0} max={15} step={1} onValueChange={setAge} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Location</h3>
                    <Input
                      placeholder="Enter city or zip code"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleReset}>
                    Reset
                  </Button>
                  <Button onClick={handleSearch}>Apply Filters</Button>
                </div>
              </SheetContent>
            </Sheet>

            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
