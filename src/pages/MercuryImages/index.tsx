import React, { useEffect } from 'react';

import CardGrid from '../../components/ImagesGrid';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectMercuryData,
    selectMercuryIsLoading,
} from '../../store/MercuryPage/selectors';
import { fetchMercuryData } from '../../store/MercuryPage/actions';

function MercuryImages() {
    const dispatch = useDispatch();
    const data = useSelector(selectMercuryData);
    const isLoading = useSelector(selectMercuryIsLoading);

    useEffect(() => {
        dispatch(fetchMercuryData());
    }, [dispatch]);

    console.log(data?.items, isLoading);

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default MercuryImages;
