import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { MercuryFetcher } from '../../store/MercuryPage/reducer';

function MercuryImages() {
    const { data, isLoading } = MercuryFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default MercuryImages;
