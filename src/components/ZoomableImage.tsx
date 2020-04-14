import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const ImageContainer = styled('div')<{ width?: number; height: number }>`
    width: ${({ width }) => (width ? `${width}px` : '100%')};
    overflow: hidden;
    height: ${({ height }) => height}px;
`;

const ImageItem = styled('img')<{ originX?: number; originY?: number }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.5);
        transform-origin: ${({ originX }) => originX}px
            ${({ originY }) => originY}px;
    }
`;

interface ZoomableImageProps {
    height: number;
    width?: number;
    src: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
    height,
    width,
    src,
}) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);

    const onMouseMove = (e) => {
        if (!ref.current) return;

        const refOffset = {
            left: ref.current.getBoundingClientRect().left,
            top: ref.current.getBoundingClientRect().top,
        };
        const mouseCoords = {
            x: e.clientX,
            y: e.clientY,
        };

        var counter = 0;
        var updateRate = 1;
        var isTimeToUpdate = function() {
            return counter++ % updateRate === 0;
        };

        isTimeToUpdate &&
            setOffset({
                x: mouseCoords.x - refOffset.left,
                y: mouseCoords.y - refOffset.top,
            });
    };

    return (
        <ImageContainer
            ref={ref}
            onMouseMove={onMouseMove}
            height={height}
            width={width}
        >
            <ImageItem src={src} originX={offset.x} originY={offset.y} />
        </ImageContainer>
    );
};

export default ZoomableImage;
