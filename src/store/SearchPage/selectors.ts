import { createSelector } from 'reselect';
import { AppState } from '../../models';

const getState = (state: AppState) => state.searchPage;

export const selectSearch = createSelector(
    getState,
    (state) => state.filters.search
);
