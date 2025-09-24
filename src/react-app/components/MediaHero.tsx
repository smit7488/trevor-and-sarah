import React from "react";
import "./MediaHero.css";

interface MediaHeroProps {
  videoSrc?: string; // optional video
  imageSrc: string;  // required fallback/primary image
  overlayContent?: React.ReactNode;
  className?: string;
}

const MediaHero: React.FC<MediaHeroProps> = ({
  videoSrc,
  imageSrc,
  overlayContent,
  className = "",
}) => {
  return (
    <div
      className={`media-hero position-relative ${className}`}
      style={{ width: "100%", overflow: "hidden" }}
    >
      {/* Background fallback image */}
      <img
        src={imageSrc}
        alt="Hero fallback"
        className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        style={{ zIndex: 0 }}
      />

      {/* Video layered above the image (if provided) */}
      {videoSrc && (
        <video
          className="w-100 h-100 object-fit-cover position-relative"
          autoPlay
          muted
          loop
          playsInline
          style={{ zIndex: 1 }}
        >
          <source src={videoSrc} type="video/mp4" />
          {/* If browser doesn’t support <video>, it falls back to the <img> */}
        </video>
      )}

      {/* Overlay content on top */}
      {overlayContent && (
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center media-hero-overlay"
          style={{ color: "#fff", zIndex: 2 }}
        >
          {overlayContent}
        </div>
      )}
    </div>
  );
};

export default MediaHero;
