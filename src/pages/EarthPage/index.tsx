import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { EarthFetcher } from '../../store/EarthPage/reducer';

function EarthPage() {
    const { data, isLoading } = EarthFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default EarthPage;
