import React from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import * as s from "./youtubeVideo.module.css";

const YoutubeVideo = ({ image, videoId }) => {
  const [opened, setOpened] = useState(false);

  const toggleOpened = e => {
    e.preventDefault();
    setOpened(!opened);
  };
  return (
    <section className={s.youtubeVideoBlock}>
      {opened === false && (
        <div onClick={toggleOpened} className={s.youtubeVideoPlaceholder}>
          {image}
        </div>
      )}
      {opened === true && (
        <YouTube
          videoId={videoId}
          loading="lazy"
          iframeClassName="mw-100 w-100 h-100"
          className={`mw-100 w-100 ${s.youtubeVideoWrapper}`}
          opts={{ playerVars: { autoplay: 1 } }}
        />
      )}
    </section>
  );
};

export default YoutubeVideo;
