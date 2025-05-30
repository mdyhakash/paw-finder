"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useCartStore } from "@/lib/cart-store";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductActionsProps {
  product: any;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem, toggleFavorite, favorites } = useCartStore();

  const favoriteId = `product_${product.id}`;
  const isFavorited = favorites.includes(favoriteId);
  const productInStock = product.inStock ?? product.in_stock ?? false;
  const productPrice = Number(product.price) || 0;

  const handleAddToCart = () => {
    if (!productInStock) return;

    // Add item to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id.toString(),
        name: product.name || "Unknown Product",
        price: productPrice,
        image: product.image || "/placeholder.svg",
      });
    }

    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity === 1 ? "item" : "items"} of ${
        product.name || "this product"
      } added to your cart.`,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(favoriteId);

    toast({
      title: isFavorited ? "Removed from favorites" : "Added to favorites",
      description: isFavorited
        ? `${
            product.name || "This product"
          } has been removed from your favorites.`
        : `${product.name || "This product"} has been added to your favorites.`,
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="h-10 w-10 rounded-none"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={increaseQuantity}
            className="h-10 w-10 rounded-none"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Button
          size="lg"
          className="flex-1"
          disabled={!productInStock}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>

        <Button
          size="icon"
          variant="outline"
          className={`h-10 w-10 ${
            isFavorited ? "text-red-500 hover:text-red-600" : ""
          }`}
          onClick={handleToggleFavorite}
        >
          <Heart className={`h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
          <span className="sr-only">
            {isFavorited ? "Remove from favorites" : "Add to favorites"}
          </span>
        </Button>
      </div>

      {!productInStock && (
        <div className="bg-muted p-3 rounded-md text-center">
          <p className="text-muted-foreground">
            This item is currently out of stock. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
}
