import { useEffect } from "react";

export function useFavicon(lightSvg: string, darkSvg: string) {
  useEffect(() => {
    // Remove any existing <link rel="icon"> to avoid Chrome ignoring new icons
    document.querySelectorAll('link[rel="icon"]').forEach(el => el.remove());

    // Create a new <link> for dynamic favicon
    const link = document.createElement("link");
    link.id = "dynamic-favicon";
    link.rel = "icon";
    document.head.appendChild(link);

    const setFavicon = (isDark: boolean) => {
      link.href = isDark ? darkSvg : lightSvg;
    };

    // Set initial favicon based on system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setFavicon(mediaQuery.matches);

    // Listen for system theme changes
    const listener = (e: MediaQueryListEvent) => setFavicon(e.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, [lightSvg, darkSvg]);
}
