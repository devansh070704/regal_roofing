
import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
    useEffect(() => {
        // Update Title
        document.title = `${title} | Elite Roofing Seattle`;

        // Update Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }
    }, [title, description]);

    return null;
};
