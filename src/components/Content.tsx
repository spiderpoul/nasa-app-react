import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Content: React.FC<{}> = ({ children }) => {
    return <ContentContainer><Nav />{children}</ContentContainer>;
};

const ContentContainer = styled.div`
    position: relative;
    z-index: 10;
    min-height: 600px;
    max-width: 1224px;
    width: 100%;
    padding: 24px;
    margin: 0 12px;
    margin-top: -150px;
    background: #fff;
    border-radius: 33px;
    box-shadow: 0 1px 2px 0 rgba(25, 27, 26, 0.1),
        0 1px 8px 0 rgba(25, 27, 26, 0.08);
`;

export default Content;
