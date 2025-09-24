// Media asset type
export interface ContentfulAsset {
  fields: {
    file: {
      url: string;
      contentType: string;
      fileName?: string;
      details?: any;
    };
    title?: string;
    description?: string;
  };
}

// Location type
export interface ContentfulLocation {
  lat: number;
  lon: number;
}

// Genre entry type
export interface Genre {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    title: string;
  };
}

// PortfolioItem content type
export interface PortfolioItem {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    title: string;
    description: string;
    category: string;
    media?: ContentfulAsset;
    location?: ContentfulLocation;
    embed?: string;
    genre?: Genre[]; // <-- updated
  };
}


export interface Testimonial {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    personName: string;
    quoteSnippet: string;
    longQuote: string;
    image?: ContentfulAsset;
  };
}
