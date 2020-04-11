import React from 'react';
import StackGrid, { transitions } from 'react-stack-grid';
import styled from 'styled-components';

const { scaleDown } = transitions;

const ImagesGrid: React.FC<any> = ({ images }) => {
    return (
        <ImageGridContainer>
            <StackGrid
                key="StackGrid"
                columnWidth={390}
                gutterWidth={10}
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
                monitorImagesLoaded
            >
                {images?.length &&
                    images?.map((item: any) => {
                        return (
                            item?.links && (
                                <ImageItem src={item?.links[0]?.href} />
                            )
                        );
                    })}
            </StackGrid>
        </ImageGridContainer>
    );
};

const ImageGridContainer = styled.div`
    padding: 50px 0px;
    margin: 0 -24px;
`;

const ImageItem = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
`;

export default ImagesGrid;
