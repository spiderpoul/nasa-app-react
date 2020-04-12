import React, { useState, useEffect } from 'react';

import ImagesGrid from '../../components/ImagesGrid';

function VenusImages() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: any = await fetch(
                `https://images-api.nasa.gov/search?q=venus&page=1`
            );
            const res = await data?.json();
            setImages(res?.collection?.items);
        };

        fetchData();
    }, []);

    return <ImagesGrid items={images.slice(0, 10)} />;
}

export default VenusImages;
