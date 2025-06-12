import { useParams } from "react-router";
import BackButton from "../components/BackButton.tsx";
import useSingleStore from "../hooks/useSingleStore.ts";
import Loader from "../components/Loader.tsx";
import { useMemo, useState } from "react";

const GameStores = () => {
  const { id } = useParams();

  const {
    data: store,
    isPending: isStorePending,
    error: storeError,
  } = useSingleStore(id || "");

  const { name, domain, description, image_background, games_count } =
    store || {};

  const [maxLines, setMaxLines] = useState(5);

  const cleanDescription = useMemo(
    () => description?.replace(/<[^>]*>?/gm, "") || "",
    [description]
  );
  if (isStorePending) return <Loader />;
  if (storeError) return <text>Error {storeError.message} </text>;

  return (
    <scroll-view className="scroll-container" scroll-orientation="vertical">
      <view className="scroll-content">
        <BackButton />
        <image
          src={image_background}
          className="image"
          style={{
            width: "100%",
            aspectRatio: 16 / 9,
            alignSelf: "center",
            borderRadius: "10px",
            border: "1px solid #000000",
          }}
        />
        <view>
          <text style={{ fontWeight: "bold" }}>Platform</text>
          <view
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <text className="platform-card">{name}</text>
            <text>{domain}</text>
          </view>
        </view>
        <view>
          <text style={{ fontWeight: "bold" }}>Available Games For Sale</text>
          <view
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <text className="platform-card">{games_count}</text>
          </view>
        </view>
        <view>
          <text style={{ fontWeight: "bold" }}>Description</text>
          <text text-maxline={maxLines.toString()}>
            {cleanDescription}
            <inline-truncation>
              <text bindtap={() => setMaxLines(maxLines + 3)}>...See More</text>
            </inline-truncation>
          </text>
        </view>{" "}
      </view>
    </scroll-view>
  );
};

export default GameStores;
