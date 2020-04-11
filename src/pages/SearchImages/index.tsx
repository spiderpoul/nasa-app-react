import React, { useState, useEffect } from 'react';

import ImagesGrid from '../../components/ImagesGrid';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Placeholder = styled.div`
    padding: 24px;
    text-align: center;
    font-size: 48px;
`;

function SearchImages() {
    const [images, setImages] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            const data: any = await fetch(
                `https://images-api.nasa.gov/search${encodeURI(
                    location.search
                )}&page=1`
            );
            const res = await data?.json();
            setImages(res?.collection?.items);
        };

        fetchData();
    }, [location.search]);

    return images ? (
        <ImagesGrid images={images.slice(0, 10)} />
    ) : (
        <Placeholder>No results found.</Placeholder>
    );
}

export default SearchImages;
