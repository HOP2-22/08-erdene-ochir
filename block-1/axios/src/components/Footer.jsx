import React, { useState } from "react";
import instagram from "../image/insta.png";
import fbook from "../image/facebook.png";
import tweet from "../image/twitter.png";

import "../Footer.css";
export const Footer = () => {
  return (
    <div className="mnb roww">
      <div className="layerone">
        <div className="fst">team.</div>
        <div className="roww">
          <img className="instaimg" src={instagram} />
          <div>Instagram</div>
        </div>
        <div className="roww">
          <img className="instaimg" src={fbook} />
          <div>FaceBook</div>
        </div>
        <div className="roww">
          <img className="instaimg" src={tweet} />
          <div>Twitter</div>
        </div>
        <div className="roww">
          <img className="instaimg" src={instagram} />
          <div>Instagram</div>
        </div>
        <div className="roww">
          <img className="instaimg" src={fbook} />
          <div>FaceBook</div>
        </div>
        <div className="roww">
          <img className="instaimg" src={tweet} />
          <div>Twitter</div>
        </div>
      </div>
      <div className="layerone">
        <div className="rest">Use cases</div>
        <div>UI Design</div>
        <div>Ux Design</div>
        <div>Prototyping</div>
        <div>UI Design</div>
        <div>Ux Design</div>
        <div>Prototyping</div>
      </div>
      <div className="layerone">
        <div className="rest">Use cases</div>
        <div>UI Design</div>
        <div>Ux Design</div>
        <div>Prototyping</div>
        <div>UI Design</div>
        <div>Ux Design</div>
        <div>Prototyping</div>
      </div>
      <div className="layerone">
        <div className="rest">Use cases</div>
        <div>UI Design</div>
        <div>Ux Design</div>
        <div>Prototyping</div>
        <div>UI Design</div>
        <div>Ux Design</div>
        <div>Prototyping</div>
      </div>
      <div>
        <div className="sub">subscribe to our newsletter</div>
        <input className="inputtt" placeholder="email" />
      </div>
    </div>
  );
};

export default Footer;
