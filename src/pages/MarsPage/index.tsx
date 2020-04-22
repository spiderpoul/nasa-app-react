import React, { useEffect } from 'react';

import CardGrid from '../../components/ImagesGrid';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectIsLoading } from '../../store/MarsPage/selectors';
import { fetchMarsData } from '../../store/MarsPage/actions';

function JupiterPage() {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchMarsData());
    }, [dispatch]);

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default JupiterPage;
