import React from "react";
import useWindowSize from "../../utils/useWindowSize";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";
import { Fade } from "react-reveal";

const VideoContent = () => {
  const width = useWindowSize();
  return (
    <div id="videoWrapper">
      <Fade right>
        <div>
          {width > 1400 ? (
            false
          ) : (
            <div id="videoTitle" className="musicTitle mainHeader">
              Video
            </div>
          )}
        </div>
        {/* <div id="musicVideo"></div>*/}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Carousel
            autoPlay={false}
            infiniteLoop={true}
            showIndicators={true}
            showStatus={false}
            showThumbs={false}
            width={width < 800 ? 300 : 680}
          >
            <div>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LXAIsRJO96Y"
                width={width < 800 ? 300 : 700}
                controls={true}
                style={{
                  justifySelf: "center",
                }}
              />
            </div>
            <div>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=2HhhWzrR3Wg"
                width={width < 800 ? 300 : 700}
                controls={true}
                style={{
                  justifySelf: "center",
                }}
              />
            </div>
            <div>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=0q40WABEZhU"
                width={width < 800 ? 300 : 700}
                controls={true}
                style={{
                  justifySelf: "center",
                }}
              />
            </div>
          </Carousel>
        </div>
        <div>
          {width > 1400 ? (
            <div id="videoTitle" className="musicTitle mainHeader">
              Video
            </div>
          ) : (
            false
          )}
        </div>
      </Fade>
    </div>
  );
};

export default VideoContent;
