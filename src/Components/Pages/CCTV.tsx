import React from "react";
import ReactHlsPlayer from "react-hls-player";

export const CCTV = () => {
  return (
    <div>
      <ReactHlsPlayer
        src="http://122.169.42.21:8086/output.m3u8"
        autoPlay={true}
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default CCTV;
