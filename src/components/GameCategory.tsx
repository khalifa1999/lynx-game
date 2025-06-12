import useGameQuery from "../hooks/useGameQuery.tsx";
import useStore from "../hooks/useStore.ts";
import type { IGamePreview, IStore } from "../types.ts";
import GameCard from "./GameCard.jsx";
import GameStores from "./GameStores.tsx";
import Loader from "./Loader.tsx";

interface IGameCategory {
  key: number;
  title: string;
  query: string;
}

const GameCategory = (props: IGameCategory) => {
  const { title, query } = props;

  const { data: games, isPending, isError } = useGameQuery(query);

  if (isPending) return <Loader />;
  if (isError) return <text>Error</text>;

  return (
    <view>
      <view className="category">
        <text className="heading">{title}</text>
        <list
          scroll-orientation="horizontal"
          list-type="single"
          span-count={1}
          className="horizontal-list"
        >
          {games?.map((game: IGamePreview) => {
            return (
              <list-item
                item-key={`list-item-${game.id}`}
                key={`list-item-${game.id}`}
              >
                <GameCard {...game} />
              </list-item>
            );
          })}
        </list>
      </view>
    </view>
  );
};

export default GameCategory;
