import React from "react";
import "./MediaHero.css";

interface MediaHeroProps {
  videoSrc?: string; // optional video
  imageSrc?: string; // optional image
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
    <div className={`media-hero position-relative ${className}`} style={{ width: "100%", overflow: "hidden" }}>
      {videoSrc && (
        <video
          className="w-100 h-100 object-fit-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {imageSrc && !videoSrc && (
        <img src={imageSrc} alt="Hero" className="w-100 h-100 object-fit-cover" />
      )}

      {overlayContent && (
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center media-hero-overlay"
          style={{ color: "#fff", zIndex: 1 }}
        >
          {overlayContent}
        </div>
      )}
    </div>
  );
};

export default MediaHero;
