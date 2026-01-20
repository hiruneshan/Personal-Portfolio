import React, { useEffect, useRef } from "react";

export default function PixelatedImage({ src, pixelSize = 10, className }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // Handle potential CORS issues if images are external
        img.src = src;
        img.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");

            // Use the parent container's size if possible, or image natural size
            // But for a background border fill, we likely want it to match the container.
            // However, the component logic provided uses img dimensions. 
            // We'll stick to img dimensions but ensure canvas is styled to fill.
            const w = img.width;
            const h = img.height;

            canvas.width = w;
            canvas.height = h;

            // Draw small version
            ctx.drawImage(img, 0, 0, w / pixelSize, h / pixelSize);

            // Scale it back up
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(
                canvas,
                0,
                0,
                w / pixelSize,
                h / pixelSize,
                0,
                0,
                w,
                h
            );
        };
    }, [src, pixelSize]);

    return <canvas ref={canvasRef} className={className} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
}
