import { useParams } from "react-router";
import { useMemo, useState } from "react";
import BackButton from "../components/BackButton.tsx";
import useSingleGameQuery from "../hooks/useGame.ts";
import "../App.css";
import useGameScreenshotQuery from "../hooks/useGameScreenshots.ts";
import Loader from "../components/Loader.tsx";
import type { IGameScreenshot } from "../types.ts";

const GameDetailsScreen = () => {
  const { id } = useParams();

  const { data: game, isPending, error } = useSingleGameQuery(id || "");
  const {
    data: screenshotResponse,
    isPending: isGameScreenshotPending,
    error: gameScreenshotError,
  } = useGameScreenshotQuery(id || "");

  const {
    name,
    description,
    background_image,
    rating,
    released,
    platforms,
    esrb_rating,
  } = game || {};

  const [maxLines, setMaxLines] = useState(5);

  const cleanDescription = useMemo(
    () => description?.replace(/<[^>]*>?/gm, "") || "",
    [description]
  );

  if (error) return <text>Error {error.message}</text>;
  if (gameScreenshotError)
    return <text>Error {gameScreenshotError.message}</text>;

  if (isPending || isGameScreenshotPending) return <Loader />;

  return (
    <scroll-view className="scroll-container">
      <view className="scroll-content" style={{ padding: "10px" }}>
        <BackButton />
        <image
          src={background_image}
          className="image"
          style={{
            width: "60%",
            alignSelf: "center",
            borderRadius: "10px",
            border: "1px solid #000000",
          }}
        />
        <view>
          <text className="game-name">{name}</text>
          <view
            className="rating-container"
            style={{
              marginTop: "10px",
              alignSelf: "center",
            }}
          >
            <image
              src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000"
              className="rating-icon"
            />
            <text className="rating-text">{rating}</text>
          </view>
          <view className="released-container">
            <image
              src="https://img.icons8.com/?size=100&id=10053&format=png&color=000000"
              style={{ width: "20px", aspectRatio: "1/1", padding: "2px" }}
            />

            <text
              style={{
                marginBottom: "5px",
                marginTop: "5px",
                fontWeight: "bold",
                padding: "2px",
              }}
            >
              {released}
            </text>
          </view>
          <view>
            <text style={{ fontWeight: "bold" }}>Description</text>
            <text text-maxline={maxLines.toString()}>
              {cleanDescription}
              <inline-truncation>
                <text bindtap={() => setMaxLines(maxLines + 3)}>
                  ...See More
                </text>
              </inline-truncation>
            </text>
          </view>
          <view>
            <text className="screenshots-title">Screenshots</text>
            <list
              scroll-orientation="horizontal"
              className="screenshots-container"
            >
              {screenshotResponse?.results.map((screenshot) => (
                <list-item
                  item-key={screenshot.id.toString()}
                  key={screenshot.id}
                >
                  <image
                    src={screenshot.image}
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "2px",
                      border: "1px solid #000000",
                      borderRadius: "10px",
                    }}
                  />
                </list-item>
              ))}
            </list>
          </view>
          <view>
            <text className="platforms-title">You can play on </text>
            <view className="platforms-container">
              {" "}
              {platforms?.map((platform) => (
                <view className="platform-card">
                  <text>{platform.platform.name}</text>
                </view>
              ))}
            </view>
          </view>
          <view>
            <text className="platforms-title">PEGI Rating</text>
            <view>
              {esrb_rating?.slug && (
                <view className="platform-card">
                  <text>{esrb_rating.slug}</text>
                </view>
              )}
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  );
};

export default GameDetailsScreen;
