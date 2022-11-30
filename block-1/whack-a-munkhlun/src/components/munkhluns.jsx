import React, { useTransition } from "react";
import "../styles/animation.css";
const Hole = ({ active, setScore }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        // paddingTop: "50px",
        // marginLeft: "700px",
        // marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "250px",
          position: "relative",
          marginLeft: "150px",
        }}
      >
        <img
          style={{ position: "absolute", zIndex: 0 }}
          src="https://cdn.discordapp.com/attachments/1022807886440697878/1045622464379633674/UpperBack.png"
        />
        <img
          className="object"
          style={{
            position: "absolute",
            zIndex: 1,
            marginLeft: "30px",
            transition: "1s",
            bottom: active ? "80px" : "-20px",
          }}
          onClick={() => {
            if (active) {
              setScore((prevscore) => prevscore + 1);
            }
          }}
          src="https://cdn.discordapp.com/attachments/1022807886440697878/1045622463704334367/rat.png"
        />
        <img
          style={{
            marginTop: "-5px",
            position: "absolute",
            zIndex: 2,
            marginTop: "121px",
            marginLeft: "-10px",
            width: "150px",
          }}
          src="https://cdn.discordapp.com/attachments/1022807886440697878/1045622464027308032/LowerBack.png"
        />
      </div>
    </div>
  );
};

export default Hole;
