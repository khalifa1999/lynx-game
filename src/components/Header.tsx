import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <view
      className="header"
      style={{
        padding: "30px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <image
        src="https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=000000"
        style={{
          width: "10%",
          aspectRatio: 1 / 1,
          alignSelf: "left",
        }}
      />
      <image
        src="https://img.icons8.com/?size=100&id=82712&format=png&color=000000"
        style={{
          width: "10%",
          aspectRatio: 1 / 1,
          alignSelf: "right",
        }}
        bindtap={() => navigate("/search")}
      />
    </view>
  );
};

export default Header;
