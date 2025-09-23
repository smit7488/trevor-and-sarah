import React from "react";
import "./VideoHero.css";

interface VideoHeroProps {
  videoSrc: string;
  overlayContent?: React.ReactNode;
  className?: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({ videoSrc, overlayContent, className }) => {
  return (
    <section className={`video-hero ${className || ""}`}>
      <video
        className="video-hero-bg"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero-image-min.avif"
      />
      <div className="video-hero-overlay">
        {overlayContent}
      </div>
    </section>
  );
};

export default VideoHero;
