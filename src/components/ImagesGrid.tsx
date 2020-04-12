import React from 'react';
import StackGrid, { transitions } from 'react-stack-grid';
import styled from 'styled-components';
import LibraryItem from './LibraryItem';
import { LibraryItemModel } from '../models';

const { scaleDown } = transitions;

const ImageGridContainer = styled.div`
    padding: 50px 0px;
    margin: 0 -24px;
`;

interface ImagesGridProps {
    items: LibraryItemModel[];
}

const ImagesGrid: React.FC<ImagesGridProps> = ({ items }) => {
    return (
        <ImageGridContainer>
            <StackGrid
                key="StackGrid"
                columnWidth={370}
                gutterWidth={24}
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
            >
                {items?.length &&
                    items?.map((item) => {
                        return <LibraryItem item={item} key={item.href} />;
                    })}
            </StackGrid>
        </ImageGridContainer>
    );
};

export default ImagesGrid;
