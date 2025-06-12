import type { IGamePreview } from "../types.ts";
import "../App.css";
import { useNavigate } from "react-router";
import { handleTapEnd, handleTapStart } from "../utils.ts";

const GameCard = (game: IGamePreview) => {
  const nav = useNavigate();
  return (
    <view
      className="card"
      style={{ width: "150px" }}
      bindtap={() => nav(`/game-details/${game.id}`)}
      main-thread:bindtouchstart={handleTapStart}
      main-thread:bindtouchend={handleTapEnd}
    >
      <image src={game.background_image} className="image" />
      <text className="card-title">{game.name}</text>
    </view>
  );
};

export default GameCard;
