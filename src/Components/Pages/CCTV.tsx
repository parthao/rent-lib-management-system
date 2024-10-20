import React, { useEffect, useRef } from "react";
import shaka from "shaka-player";

export default function CCTV() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const player = new shaka.Player(video);

    player
      .load("http://122.169.42.21:8086/output.m3u8")
      .then(() => {
        console.log("The video has been successfully loaded!");
      })
      .catch((error) => {
        console.error("Error loading video:", error);
      });

    return () => player.destroy();
  }, []);

  return (
    <div>
      <video ref={videoRef} controls autoPlay width="70%" height="50%" />
    </div>
  );
}
