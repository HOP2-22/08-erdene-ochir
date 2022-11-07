import React, { useState } from "react";
import second from "../image/2nd.png";
import first from "../image/1st.png";
import "../styles/Bozos.css";
export const Bozo = () => {
  return (
    <div>
      <div className="rowww jus">
        <img className="imageeeee" src={first} />
        <div className="colummnn aly">
          <div className="colummnn ttl">
            <div>Simple task</div>
            <div>management</div>
          </div>
          <div className="colummnn ttle">
            <div>Give everyone you work with—inside and outside your</div>
            <div>company—a more productive way to stay in sync</div>
            <div>Respond faster with emoji, keep conversations focused</div>
            <div>in channels, and simplify all your communication into</div>
            <div>one place.</div>
          </div>
        </div>
      </div>
      <div className="rowww jus">
        <div className="colummnn aly">
          <div className="colummnn ttlee">
            <div>Scheduling that</div>
            <div>actually works</div>
          </div>
          <div className="colummnn ttleee">
            <div>Give everyone you work with—inside and outside your</div>
            <div>company—a more productive way to stay in sync</div>
            <div>Respond faster with emoji, keep conversations focused</div>
            <div>in channels, and simplify all your communication into</div>
            <div>one place.</div>
          </div>
        </div>
        <img className="imageeeee" src={second} />
      </div>
    </div>
  );
};
export default Bozo;
