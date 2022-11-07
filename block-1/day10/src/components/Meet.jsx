import "../styles/meet.css";
export const Meet = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="col m1">
          <div>Your Hub for</div>
          <div>teamwork</div>
        </div>
        <div className="col m2">
          <div>Give everyone you work with—inside and outside your</div>
          <div>company—a more productive way to stay in sync.</div>
          <div>Respond faster with emoji, keep conversations focused</div>
          <div>in channels, and simplify all your communication into</div>
          <div>one place.</div>
        </div>
      </div>
      <img className="imge" src="meet.png" />
    </div>
  );
};

export default Meet;
