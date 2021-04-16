import React from "react";
import { Fade, Zoom } from "react-reveal";
import ReactPlayer from "react-player";

const FeaturedContent = () => {
  return (
    <div className="featuredWrapper">
      <div className="featuredContent">
        <div style={{ paddingLeft: 50 }}>
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
        <div id="featuredVideo">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=5vIzl-PxKAU"
            width={800}
            height={450}
            controls={false}
            //controls
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
