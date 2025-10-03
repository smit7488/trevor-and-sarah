import React from "react";
import "./MediaHero.css";

interface MediaHeroProps {
  videoSrc?: string;
  imageSrc: string;
  overlayContent?: React.ReactNode;
  wireblock?: string; // optional
  height?: "full" | "half";
  photoOnly?: boolean;
  className?: string;
  textColor?: string;
}

const MediaHero: React.FC<MediaHeroProps> = ({
  videoSrc,
  imageSrc,
  overlayContent,
  wireblock,
  height = "full",
  photoOnly = false,
  className = "",
  textColor = "#1a1a1a",
}) => {
 const navHeight = 64; // px, adjust to match your nav

const heightStyle: React.CSSProperties = {
  height: height === "full" ? `calc(100vh - ${navHeight}px)` : "50vh",
};

  const applyTextColor = (content: React.ReactNode): React.ReactNode => {
    if (!content) return null;

    if (typeof content === "string") {
      return <span style={{ color: textColor }}>{content}</span>;
    }

    if (React.isValidElement(content)) {
      const element = content as React.ReactElement<any>;
      return React.cloneElement(
        element,
        {
          ...(element.props.style !== undefined && {
            style: { ...(element.props.style || {}), color: textColor },
          }),
        },
        applyTextColor(element.props.children)
      );
    }

    if (Array.isArray(content)) {
      return content.map((child, idx) => (
        <React.Fragment key={idx}>{applyTextColor(child)}</React.Fragment>
      ));
    }

    return content;
  };

  return (
    <div
      className={`media-hero position-relative ${className}`}
      style={{ width: "100%", overflow: "hidden", ...heightStyle }}
    >
      {/* Base image */}
      <img
        src={imageSrc}
        alt="Hero fallback"
        className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        style={{ zIndex: 0 }}
      />

      {/* Optional video */}
      {!photoOnly && videoSrc && (
        <video
          className="w-100 h-100 object-fit-cover position-relative"
          autoPlay
          muted
          loop
          playsInline
          style={{ zIndex: 1 }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Wireblock container only if wireblock exists */}
      {wireblock && (
        <div className="container h-100 d-flex justify-content-center align-items-center position-relative">
          <img
            src={wireblock}
            alt="Wireblock overlay"
            className="media-hero-wireblock position-absolute"
            style={{ zIndex: 2 }}
          />
        </div>
      )}

      {/* Overlay text/content */}
      {overlayContent && (
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center media-hero-overlay"
          style={{ zIndex: 3 }}
        >
          {applyTextColor(overlayContent)}
        </div>
      )}
    </div>
  );
};

export default MediaHero;
