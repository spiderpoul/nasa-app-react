import React from 'react';

import CardGrid from '../../components/ImagesGrid';
import { MoonFetcher } from '../../store/MoonPage/reducer';

function MoonPage() {
    const { data, isLoading } = MoonFetcher.useData();

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default MoonPage;
