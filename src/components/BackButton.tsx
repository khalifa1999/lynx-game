import { useNavigate } from "react-router";
import { handleTapEnd, handleTapStart } from "../utils.ts";

const BackButton = () => {
  const nav = useNavigate();
  return (
    <view
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <image
        src="https://img.icons8.com/ios-glyphs/30/circled-left-2.png"
        className="back-icon"
        bindtap={() => nav(-1)}
        main-thread:bindtouchstart={handleTapStart}
        main-thread:bindtouchend={handleTapEnd}
      />
      <text>Back</text>
    </view>
  );
};

export default BackButton;
