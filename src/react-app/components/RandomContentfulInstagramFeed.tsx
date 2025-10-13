import React, { useEffect, useState } from "react";
import client from "../contentfulClient";
import { PortfolioItem } from "../types/contentful";
import InstagramFeed from "./InstagramFeed";
import Spinner from "react-bootstrap/Spinner"; 
import { Container } from "react-bootstrap";


// Helper function to shuffle an array (can be reused globally)
const shuffleArray = (array: any[]) => {
    const arr = [...array]; 
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

interface RandomContentfulInstagramFeedProps {
    instagramUrl: string;
}

const RandomContentfulInstagramFeed: React.FC<RandomContentfulInstagramFeedProps> = ({ instagramUrl }) => {
    const [randomImageUrls, setRandomImageUrls] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const IMAGE_LIMIT = 6; 

        client
            .getEntries({ 
                content_type: "portfolioItem",
                // FIX: Removed the 'select' parameter. 
                // This ensures the full linked asset data (fields.file.url) is included in the response.
            })
            .then((response) => {
                const allImageUrls: string[] = [];

                response.items.forEach((item: any) => {
                    const fields: PortfolioItem["fields"] = item.fields;
                    const photos = fields.photos || [];

                    // Extract all valid image URLs from the portfolio items
                    photos.forEach((photo: any) => {
                        // This check now passes because photo.fields.file is available
                        if (photo.fields?.file?.contentType.startsWith("image/")) {
                            const mediaUrl = `https:${photo.fields.file.url}`;
                            allImageUrls.push(mediaUrl);
                        }
                    });
                });

                // Shuffle the collected URLs and select up to the limit
                const shuffledUrls = shuffleArray(allImageUrls);
                const selectedImages = shuffledUrls.slice(0, IMAGE_LIMIT);

                setRandomImageUrls(selectedImages);
            })
            .catch((error) => {
                console.error("Contentful fetch failed:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        // Render a placeholder while fetching
        return (
            <section className="py-0 bg-light text-center position-relative">
                <Container fluid className="p-0 py-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading Instagram feed...</span>
                    </Spinner>
                </Container>
            </section>
        );
    }
    
    // Pass the fetched random images to the presentational component
    return (
        <InstagramFeed 
            instagramUrl={instagramUrl} 
            images={randomImageUrls}
        />
    );
};

export default RandomContentfulInstagramFeed;