import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardGrid from '../../components/ImagesGrid';
import { selectData, selectIsLoading } from '../../store/EarthPage/selectors';
import { fetchEarthData } from '../../store/EarthPage/actions';

function EarthPage() {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchEarthData());
    }, [dispatch]);

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default EarthPage;
