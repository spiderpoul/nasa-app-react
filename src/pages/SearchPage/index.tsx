import React, { useEffect } from 'react';
import styled from 'styled-components';

import CardGrid from '../../components/ImagesGrid';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectData,
    selectIsLoading,
    selectSearch,
} from '../../store/SearchPage/selectors';
import { fetchSearchData } from '../../store/SearchPage/actions';
import { setSearch } from '../../store/SearchPage/actionsCreators';
import { useQuerySearch } from '../../hooks/useQuerySearch';
import { useDebounce } from '../../hooks/useDebounce';

const Placeholder = styled.div`
    padding: 24px;
    text-align: center;
    font-size: 48px;
`;

function SearchImages() {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const search = useSelector(selectSearch);
    const searchDebounce = useDebounce(search);
    const isLoading = useSelector(selectIsLoading);
    const querySearch = useQuerySearch();

    useEffect(() => {
        dispatch(fetchSearchData({ search: searchDebounce }));
    }, [dispatch, searchDebounce]);

    useEffect(() => {
        if (!search && querySearch) {
            dispatch(setSearch({ search: querySearch }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return data?.items?.length || isLoading ? (
        <CardGrid items={data?.items?.slice(0, 10)} isLoading={isLoading} />
    ) : (
        <Placeholder>No results found.</Placeholder>
    );
}

export default SearchImages;
