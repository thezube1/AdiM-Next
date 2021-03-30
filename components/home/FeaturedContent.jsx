import React from "react";
import { Fade, Zoom } from "react-reveal";

const FeaturedContent = () => {
  return (
    <div className="featuredWrapper">
      <div className="featuredContent">
        <div style={{ maxWidth: "max-content" }}>
          <Fade left>
            <div id="featuredTitle">
              Summer <br />
              Daydream
            </div>
          </Fade>
          <Zoom cascade>
            <div id="featuredBar"></div>
          </Zoom>
        </div>
        <Fade right>
          <div
            className="featuredHeader"
            style={{ fontSize: 20, marginTop: 10, color: "rgb(247, 199, 203)" }}
          >
            Out now
          </div>
        </Fade>
        <div id="featuredListenWrapper">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ffm.to/summerdaydream"
            id="featuredListenText"
            className="featuredHeader"
          >
            Listen 
          </a>
          <div id="featuredListenBack"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
