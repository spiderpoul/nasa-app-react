import React, { useEffect } from 'react';
import styled from 'styled-components';

import CardGrid from '../../components/ImagesGrid';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../../store/SearchPage/selectors';
import { useQuerySearch } from '../../hooks/useQuerySearch';
import { useDebounce } from '../../hooks/useDebounce';
import {
    SearchPageFilters,
    SearchFetcher,
} from '../../store/SearchPage/reducer';

const Placeholder = styled.div`
    padding: 24px;
    text-align: center;
    font-size: 48px;
`;

function SearchImages() {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch);
    const searchDebounce = useDebounce(search);
    const querySearch = useQuerySearch();

    const { setSearch } = SearchPageFilters.bind(dispatch);

    const { data, isLoading } = SearchFetcher.useData(searchDebounce);

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
