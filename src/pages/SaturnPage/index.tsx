import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { SaturnFetcher } from '../../store/SaturnPage/reducer';

function SaturnPage() {
    const { data, isLoading } = SaturnFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default SaturnPage;
