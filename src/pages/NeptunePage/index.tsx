import React, { useEffect } from 'react';

import CardGrid from '../../components/ImagesGrid';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectIsLoading } from '../../store/NeptunePage/selectors';
import { fetchNeptuneData } from '../../store/NeptunePage/actions';

function NeptunePage() {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchNeptuneData());
    }, [dispatch]);

    return <CardGrid items={data?.items} isLoading={isLoading} />;
}

export default NeptunePage;
