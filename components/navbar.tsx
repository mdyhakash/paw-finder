"use client"

import { NavigationMenuList } from "@/components/ui/navigation-menu"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Search, Menu, ShoppingCart, Heart, User, PawPrintIcon as Paw, Stethoscope, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { useCartStore } from "@/lib/cart-store"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const pathname = usePathname()
  const { getTotalItems, favorites } = useCartStore()

  const cartItemCount = getTotalItems()
  const favoriteItemCount = favorites.length

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/") ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Paw className="h-4 w-4 mr-2 inline-block" />
                Find Pets
              </Link>
              <Link
                href="/veterinary"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/veterinary") ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Stethoscope className="h-4 w-4 mr-2 inline-block" />
                Veterinary
              </Link>
              <Link
                href="/marketplace"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/marketplace") ? "text-primary" : "text-muted-foreground",
                )}
              >
                <ShoppingBag className="h-4 w-4 mr-2 inline-block" />
                Marketplace
              </Link>
              <Link
                href="/checkout"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/checkout") ? "text-primary" : "text-muted-foreground",
                )}
              >
                <ShoppingCart className="h-4 w-4 mr-2 inline-block" />
                Checkout
              </Link>
              <Link
                href="/favorites"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  isActive("/favorites") ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Heart className="h-4 w-4 mr-2 inline-block" />
                Favorites
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Paw className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl hidden sm:inline-block">PawFinder</span>
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Find Pets</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/veterinary" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Veterinary</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/marketplace" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Marketplace</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center ml-auto gap-2">
          <div className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full pl-8 rounded-full bg-muted" />
          </div>

          <Link href="/favorites">
            <Button variant="ghost" size="icon" className="hidden md:flex relative">
              <Heart className="h-5 w-5" />
              {favoriteItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {favoriteItemCount}
                </Badge>
              )}
              <span className="sr-only">Favorites</span>
            </Button>
          </Link>

          <Link href="/checkout">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

