import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { UranusFetcher } from '../../store/UranusPage/reducer';

function UranusPage() {
    const { data, isLoading } = UranusFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default UranusPage;
