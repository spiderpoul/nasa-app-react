import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { PlutoFetcher } from '../../store/PlutoPage/reducer';

function PlutoPage() {
    const { data, isLoading } = PlutoFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default PlutoPage;
