import React, { useRef, useEffect } from 'react';

const PixelatedImage = ({ src, alt, className, priority, triggerAnimation = true }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!triggerAnimation) return; // trigger

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = src;

        let pixelSize = 60;
        const minPixelSize = 1;
        const speed = 0.5; // Animation speed

        let animationFrameId;

        const drawPixelated = (size) => {
            const w = canvas.width;
            const h = canvas.height;

            // 1. Draw image to smaller temp canvas (downscale)
            const tempCanvas = document.createElement("canvas");
            const tempCtx = tempCanvas.getContext("2d");

            // Calculate scaled dimensions
            const scaledW = w / size;
            const scaledH = h / size;

            // Avoid width/height being 0 or infinite
            tempCanvas.width = Math.max(1, Math.floor(scaledW));
            tempCanvas.height = Math.max(1, Math.floor(scaledH));

            tempCtx.imageSmoothingEnabled = false;
            tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);

            // 2. Draw small canvas back to main canvas (upscale)
            ctx.imageSmoothingEnabled = false;
            // Clear isn't strictly necessary if drawing opaque image over full canvas
            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(tempCanvas, 0, 0, w, h);
        };

        const animate = () => {
            drawPixelated(pixelSize);

            pixelSize -= speed;

            if (pixelSize <= minPixelSize) {
                // Final update: draw clear image
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                // Stop animation
                return;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        img.onload = () => {
            // Set canvas resolution to match image
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            // Start animation
            animate();
        };

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [src, triggerAnimation]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            aria-label={alt}
            style={{ width: '100%', height: 'auto' }} // Ensure responsiveness matches CSS expectations
        />
    );
};

export default PixelatedImage;
