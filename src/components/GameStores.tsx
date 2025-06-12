import { useNavigate } from "react-router";
import type { IStore } from "../types.ts";
import { handleTapEnd, handleTapStart } from "../utils.ts";

const GameStoreCard = (props: { store: IStore }) => {
  const { store } = props;
  const nav = useNavigate();
  return (
    <view
      className="card-store"
      style={{ width: "300px; " }}
      bindtap={() => nav(`/game-stores/${store.id}`)}
      main-thread:bindtouchstart={handleTapStart}
      main-thread:bindtouchend={handleTapEnd}
    >
      <image
        src={store.image_background}
        className="image"
        style={{ marginBottom: "2px" }}
      />
      <view
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <text
          className="card-title"
          style={{
            border: "1px solid #000",
            borderRadius: "10px",
            padding: "5px",
            backgroundColor: "#ffd966",
          }}
        >
          {store.name}
        </text>
      </view>
    </view>
  );
};

export default GameStoreCard;
