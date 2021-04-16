import React from "react";
import useWindowSize from "../../utils/useWindowSize";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";

const VideoContent = () => {
  const width = useWindowSize();
  return (
    <div id="videoWrapper">
      {width > 1400 ? (
        false
      ) : (
        <div id="videoTitle" className="musicTitle mainHeader">
          Video
        </div>
      )}
      {/* <div id="musicVideo"></div>*/}
      <div style={{ marginRight: 0 }}>
        <Carousel
          autoPlay={false}
          infiniteLoop={false}
          centerMode={true}
          centerSlidePercentage={100}
          showIndicators={true}
          showStatus={false}
          showThumbs={true}
          dynamicHeight={true}
          width={width > 550 ? 800 : 300}
        >
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXAIsRJO96Y"
              width={width < 800 ? 800 : 635}
              controls={true}
              style={{
                justifySelf: "center",
              }}
            />
          </div>
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=2HhhWzrR3Wg"
              width={width < 800 ? 800 : 635}
              controls={true}
              style={{
                justifySelf: "center",
              }}
            />
          </div>
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=0q40WABEZhU"
              width={width < 800 ? 800 : 635}
              controls={true}
              style={{
                justifySelf: "center",
              }}
            />
          </div>
        </Carousel>
      </div>
      {width > 1400 ? (
        <div id="videoTitle" className="musicTitle mainHeader">
          Video
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default VideoContent;
