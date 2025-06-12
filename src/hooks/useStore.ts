import { useQuery } from "@tanstack/react-query";
import type { IStore } from "../types.ts";

const API_KEY = "";

const useStore = () => {
  const getGameStore = async (): Promise<IStore[]> => {
    const response = await fetch(
      `https://api.rawg.io/api/stores?key=${API_KEY}&page_size=20`
    );

    const data = await response.json();

    const stores: IStore[] = data.results.map((store: IStore) => ({
      id: store.id,
      name: store.name,
      slug: store.slug,
      domain: store.domain,
      games_count: store.games_count,
      image_background: store.image_background,
    }));
    return stores;
  };
  return useQuery({
    queryKey: ["game-store"],
    queryFn: getGameStore,
  });
};

export default useStore;
