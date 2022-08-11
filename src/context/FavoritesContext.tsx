import { MovieElement } from "../types";
import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

type FavoritesProviderProps = {
  children: ReactNode;
};

type FavoritesContext = {
  favorites: MovieElement[];
  addToFavorites: (obj: MovieElement) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
};
const FavoritesContext = createContext({} as FavoritesContext);
export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useLocalStorage<MovieElement[]>(
    "favorite-movies",
    []
  );

  function isFavorite(id: number) {
    return favorites.find((item) => item.id === id);
  }

  function addToFavorites(obj: MovieElement) {
    setFavorites((prevItems) => [...prevItems, obj]);
    toast.success("Movie added to favorites!");
  }

  function removeFromFavorites(id: number) {
    setFavorites((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
    toast.success("Movie removed from favorites!");
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
