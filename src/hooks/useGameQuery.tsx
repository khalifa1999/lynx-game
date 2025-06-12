import { useQuery } from "@tanstack/react-query";
import type { IGamePreview } from "../types.ts";

const API_KEY = "";

const useGameQuery = (query: string) => {
  const getQueriedGames = async (): Promise<IGamePreview[]> => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&${query}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    const data = await response.json();
    const games: IGamePreview[] = data.results.map(
      (game: any): IGamePreview => ({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
        released: game.released,
      })
    );

    return games.slice(0, 10);
  };

  return useQuery<IGamePreview[], Error>({
    queryKey: ["gamesQueried", query],
    queryFn: getQueriedGames,
  });
};

export default useGameQuery;
