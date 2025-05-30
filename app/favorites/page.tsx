import FavoritesPage from "@/components/favorites-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Favorites - PawFinder",
  description: "View and manage your favorite pets and products",
};

export default function Favorites() {
  return (
    <>
      <FavoritesPage />
    </>
  );
}
