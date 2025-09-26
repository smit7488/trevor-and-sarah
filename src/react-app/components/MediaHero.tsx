import React from "react";
import "./MediaHero.css";

interface MediaHeroProps {
  videoSrc?: string;
  imageSrc: string;
  overlayContent?: React.ReactNode;
  height?: "full" | "half";
  photoOnly?: boolean;
  className?: string;
  textColor?: string; // optional text color
}

const MediaHero: React.FC<MediaHeroProps> = ({
  videoSrc,
  imageSrc,
  overlayContent,
  height = "full",
  photoOnly = false,
  className = "",
  textColor = "#1a1a1a", // default text color
}) => {
  const heightStyle: React.CSSProperties = {
    height: height === "full" ? "100vh" : "50vh",
  };

  // Helper: recursively apply text color to all overlay content
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
          ...(element.props.style !== undefined && { style: { ...(element.props.style || {}), color: textColor } }),
        },
        applyTextColor(element.props.children)
      );
    }

    if (Array.isArray(content)) {
      return content.map((child, idx) => <React.Fragment key={idx}>{applyTextColor(child)}</React.Fragment>);
    }

    return content;
  };

  return (
    <div
      className={`media-hero position-relative ${className}`}
      style={{ width: "100%", overflow: "hidden", ...heightStyle }}
    >
      <img
        src={imageSrc}
        alt="Hero fallback"
        className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        style={{ zIndex: 0 }}
      />

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

      {overlayContent && (
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center media-hero-overlay"
          style={{ zIndex: 2 }}
        >
          {applyTextColor(overlayContent)}
        </div>
      )}
    </div>
  );
};

export default MediaHero;
