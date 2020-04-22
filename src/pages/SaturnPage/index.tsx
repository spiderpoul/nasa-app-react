import React, { useEffect } from 'react';

import CardGrid from '../../components/ImagesGrid';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectIsLoading } from '../../store/SaturnPage/selectors';
import { fetchSaturnData } from '../../store/SaturnPage/actions';

function SaturnPage() {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchSaturnData());
    }, [dispatch]);

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default SaturnPage;
