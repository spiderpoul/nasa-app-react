import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { JupiterFetcher } from '../../store/JupiterPage/reducer';

function JupiterPage() {
    const { data, isLoading } = JupiterFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default JupiterPage;
