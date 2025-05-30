"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ProductSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [category, setCategory] = useState(searchParams.get("category") || "")
  const [petType, setPetType] = useState(searchParams.get("petType") || "")
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [priceRange, setPriceRange] = useState<number[]>([
    Number.parseInt(searchParams.get("minPrice") || "0"),
    Number.parseInt(searchParams.get("maxPrice") || "200"),
  ])
  const [inStock, setInStock] = useState(searchParams.get("inStock") === "true")
  const [onSale, setOnSale] = useState(searchParams.get("onSale") === "true")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Update search when Enter key is pressed in the search input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString())

    if (query) params.set("q", query)
    else params.delete("q")

    if (category && category !== "all") params.set("category", category)
    else params.delete("category")

    if (petType && petType !== "all") params.set("petType", petType)
    else params.delete("petType")

    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())

    if (inStock) params.set("inStock", "true")
    else params.delete("inStock")

    if (onSale) params.set("onSale", "true")
    else params.delete("onSale")

    router.push(`/marketplace?${params.toString()}`)
    setIsFilterOpen(false)
  }

  const handleReset = () => {
    setCategory("")
    setPetType("")
    setQuery("")
    setPriceRange([0, 200])
    setInStock(false)
    setOnSale(false)
    router.push("/marketplace")
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
                placeholder="Search products..."
                className="pl-8"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:flex gap-4">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="toys">Toys</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="health">Health & Wellness</SelectItem>
                <SelectItem value="grooming">Grooming</SelectItem>
              </SelectContent>
            </Select>

            <Select value={petType} onValueChange={setPetType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Pet Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pets</SelectItem>
                <SelectItem value="dog">Dogs</SelectItem>
                <SelectItem value="cat">Cats</SelectItem>
                <SelectItem value="bird">Birds</SelectItem>
                <SelectItem value="fish">Fish</SelectItem>
                <SelectItem value="small-pet">Small Pets</SelectItem>
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
                  <SheetTitle>Filter Products</SheetTitle>
                  <SheetDescription>Adjust filters to find the perfect products for your pet</SheetDescription>
                </SheetHeader>
                <div className="space-y-6 py-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Category</h3>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="toys">Toys</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                        <SelectItem value="health">Health & Wellness</SelectItem>
                        <SelectItem value="grooming">Grooming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Pet Type</h3>
                    <Select value={petType} onValueChange={setPetType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Pets</SelectItem>
                        <SelectItem value="dog">Dogs</SelectItem>
                        <SelectItem value="cat">Cats</SelectItem>
                        <SelectItem value="bird">Birds</SelectItem>
                        <SelectItem value="fish">Fish</SelectItem>
                        <SelectItem value="small-pet">Small Pets</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium">Price Range</h3>
                      <span className="text-sm text-muted-foreground">
                        ${priceRange[0]} - ${priceRange[1]}
                      </span>
                    </div>
                    <Slider value={priceRange} min={0} max={200} step={5} onValueChange={setPriceRange} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Availability</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="in-stock"
                        checked={inStock}
                        onCheckedChange={(checked) => setInStock(checked === true)}
                      />
                      <Label htmlFor="in-stock">In Stock Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="on-sale"
                        checked={onSale}
                        onCheckedChange={(checked) => setOnSale(checked === true)}
                      />
                      <Label htmlFor="on-sale">On Sale</Label>
                    </div>
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
