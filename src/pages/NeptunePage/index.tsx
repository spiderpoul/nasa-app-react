import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { NeptuneFetcher } from '../../store/NeptunePage/reducer';

function NeptunePage() {
    const { data, isLoading } = NeptuneFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default NeptunePage;
