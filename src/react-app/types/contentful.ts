// Media asset file details type
export interface ContentfulFileDetails {
  size?: number; // file size in bytes
  image?: {
    width: number;
    height: number;
  };
}

// Media asset type
export interface ContentfulAsset {
  fields: {
    file: {
      url: string;
      contentType: string;
      fileName?: string;
      details?: ContentfulFileDetails; // <-- replace 'any' with typed interface
    };
    title?: string;
    description?: string;
  };
}

// Genre entry type
export interface Genre {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    name: any;
    title: string;
  };
}

// Testimonial content type
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

// Media Item content type
export interface MediaItem {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    title: string;
    category: "Video" | "Photo";
    description: string;
    embed?: string; // optional for videos (e.g. Vimeo/YouTube embed code)
    photo?: ContentfulAsset; // optional if category is Video
    genre?: {
      sys: {
        id: string;
        type: string;
        linkType: "Entry";
      };
      fields?: {
        title?: string; // assuming the Genre content type has a "title" field
      };
    }[];
    location?: string;
  };
}

