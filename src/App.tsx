import GameCard from "./components/GameCard.jsx";
import GameCategory from "./components/GameCategory.jsx";
import "./App.css";
import type { IStore } from "./types.ts";
import GameStores from "./components/GameStores.tsx";
import useStore from "./hooks/useStore.ts";
import GameStoreCard from "./components/GameStores.tsx";
import Header from "./components/Header.tsx";

export function App() {
  const gameCategories = [
    {
      id: 1,
      title: "The Most Anticipated",
      query: `ordering=-added&dates=2025-01-01,2025-10-01`,
    },
    {
      id: 2,
      title: "The Most Popular",
      query: `ordering=-added`,
    },
    {
      id: 3,
      title: "The Best Rated",
      query: `ordering=-rating`,
    },
  ];

  const {
    data: stores,
    isPending: isStorePending,
    isError: isStoreError,
  } = useStore();
  return (
    <scroll-view className="scroll-container" scroll-orientation="vertical">
      <Header />
      <view className="scroll-content">
        <text className="heading">Game Stores</text>
        <list
          scroll-orientation="horizontal"
          list-type="single"
          span-count={1}
          className="horizontal-list"
        >
          {stores?.map((store: IStore) => {
            return (
              <list-item
                item-key={`list-item-${store.id}`}
                key={`list-item-${store.id}`}
              >
                <GameStoreCard store={store} />
              </list-item>
            );
          })}
        </list>
      </view>
      <view className="scroll-content">
        {gameCategories.map((category) => (
          <GameCategory key={category.id} {...category} />
        ))}
      </view>
    </scroll-view>
  );
}
