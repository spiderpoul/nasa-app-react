import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { VenusFetcher } from '../../store/VenusPage/reducer';

function VenusPage() {
    const { data, isLoading } = VenusFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default VenusPage;
