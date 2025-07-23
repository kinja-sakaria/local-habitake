/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function ClientVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const handleVideoToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused || isEnded) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setIsEnded(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setIsEnded(true);
  };

  return (
    <section className="relative flex justify-center items-center lg:h-[628px] tablet:h-[500px] mobile:h-[300px] overflow-hidden">
      <video
        ref={videoRef}
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover"
        src="/assets/video/video-1.mp4"
        poster="/assets/images/thumbnail.jpg"
        playsInline
      />

      {/* Show thumbnail when video is ended or not playing */}
      {!isPlaying && isEnded && (
        <img
          src="/assets/images/thumbnail.jpg"
          alt="Thumbnail"
          className="absolute w-full h-full object-cover z-0"
        />
      )}

      <button
        onClick={handleVideoToggle}
        className="absolute z-10 flex items-center justify-center bg-white rounded-full p-4 w-[100px] h-[100px] tablet:w-20 tablet:h-20 mobile:w-[50px] mobile:h-[50px]"
      >
        {isPlaying ? (
          <FontAwesomeIcon
            icon={faPause}
            className="text-black lg:w-[30px] lg:h-[30px] mobile:w-4 mobile:h-4"
          />
        ) : (
          <FontAwesomeIcon icon={faPlay} className="md:w-[30px] md:h-[30px] mobile:w-4 mobile:h-4" />
        )}
      </button>
    </section>
  );
}
