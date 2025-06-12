import { useQuery } from "@tanstack/react-query";
import type { IStoreDetails } from "../types.ts";

const API_KEY = "";

const useSingleStore = (id: string) => {
  const getGameStore = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/stores/${id}?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch store details");
    }

    return response.json();
  };
  return useQuery<IStoreDetails, Error>({
    queryKey: ["game-store", id],
    queryFn: getGameStore,
  });
};

export default useSingleStore;
