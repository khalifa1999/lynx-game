import { useQuery } from "@tanstack/react-query";
import type { IGame, IGamePreview } from "../types.ts";

const API_KEY = "";

const useSingleGameQuery = (id: string) => {
  const getQueriedGame = async (): Promise<IGame> => {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    const data = await response.json();
    const game: IGame = data;

    return game;
  };

  return useQuery({
    queryKey: ["gameQueried", id],
    queryFn: getQueriedGame,
  });
};

export default useSingleGameQuery;
