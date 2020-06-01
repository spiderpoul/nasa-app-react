import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { MarsFetcher } from '../../store/MarsPage/reducer';

function JupiterPage() {
    const { data, isLoading } = MarsFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default JupiterPage;
