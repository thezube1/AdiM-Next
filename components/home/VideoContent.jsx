import React from "react";
import useWindowSize from "../../utils/useWindowSize";
import ReactPlayer from "react-player";

const VideoContent = () => {
  const width = useWindowSize();
  return (
    <div id="videoWrapper">
      {width < 1400 ? (
        <div id="musicTitle" className="mainHeader">
          Video
        </div>
      ) : (
        false
      )}
      <div id="musicVideo">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXAIsRJO96Y"
          width={width <= 650 ? 350 : 635}
          controls={true}
          style={{
            justifySelf: "center",
          }}
        />
      </div>
      {width > 1400 ? (
        <div id="videoTitle" className="mainHeader">
          Video
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default VideoContent;
