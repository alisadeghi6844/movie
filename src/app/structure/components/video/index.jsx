import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const Video = (props) => {
  const { url, posterImage, ...rest } = props;
  return (
    <Plyr
      id="plyr"
      width="100%"
      height="100%"
      source={{
        type: "video",
        title: "Example title",
        sources: [
          {
            src: url,
            type: "video/mp4",
            size: 720,
          },
          {
            src: url,
            type: "video/webm",
            size: 1080,
          },
        ],
        poster: posterImage,
      }}
      {...rest}
    />
  );
};

export default Video;
