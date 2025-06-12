import { useQuery } from "@tanstack/react-query";
import type { IGameScreenshotResponse } from "../types.ts";

const API_KEY = "";

const useGameScreenshotQuery = (id: string) => {
  const getQueriedGames = async (): Promise<IGameScreenshotResponse> => {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    return response.json();
  };

  return useQuery<IGameScreenshotResponse, Error>({
    queryKey: ["gameScreenshotQueried", id],
    queryFn: getQueriedGames,
  });
};

export default useGameScreenshotQuery;
