import React, { useEffect } from 'react';

import CardGrid from '../../components/ImagesGrid';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectIsLoading } from '../../store/PlutoPage/selectors';
import { fetchPlutoData } from '../../store/PlutoPage/actions';

function PlutoPage() {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchPlutoData());
    }, [dispatch]);

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default PlutoPage;
