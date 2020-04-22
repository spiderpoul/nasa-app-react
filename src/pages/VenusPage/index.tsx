import React, { useEffect } from 'react';

import CardGrid from '../../components/ImagesGrid';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectIsLoading } from '../../store/VenusPage/selectors';
import { fetchVenusData } from '../../store/VenusPage/actions';

function VenusPage() {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchVenusData());
    }, [dispatch]);

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default VenusPage;
