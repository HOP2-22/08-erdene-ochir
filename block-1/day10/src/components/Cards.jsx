import React from "react";
import "../styles/Cards.css";
const cardData = [
  {
    star: 1,
    comment:
      "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
    avatar:
      "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
    name: "flew 4k",
  },
  {
    star: 5,
    comment:
      "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAthLK6MYEGwG1m5Mn9u2yXXAS2q3Ka7Xtig&usqp=CAU",
    name: "emu the teacher",
  },
  {
    star: 3,
    comment:
      "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
    avatar:
      "data:image/jpeg;base64,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",
    name: "emu the bird",
  },
  {
    star: 2,
    comment:
      "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
    avatar:
      "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
    name: "not emu",
  },
];
export const Card = (props) => {
  const { starNumber, comment, avatar, name } = props;
  const star = ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️"];
  star.length = starNumber;

  return (
    <div
      className="back"
      sryle={{
        padding: "15px 30px 15px 30px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <div className="star" style={{ display: "flex", gap: 5 }}>
        {star.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </div>
      <p style={{ width: 250 }} className="com">
        {comment}
      </p>
      <div
        style={{
          display: "flex",
          marginTop: 10,
          marginBottom: 10,
          alignItems: "center,",
        }}
      >
        <img
          className="img"
          style={{ height: 100, borderRadius: 10 }}
          src={avatar}
          alt="lorem"
        />
        <h4 className="name">{name}</h4>
      </div>
    </div>
  );
};
export const Cards = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
      {cardData.map((data) => {
        return (
          <Card
            starNumber={data.star}
            comment={data.comment}
            avatar={data.avatar}
            name={data.name}
          />
        );
      })}
    </div>
  );
};
export default Cards;
