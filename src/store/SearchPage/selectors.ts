import { createSelector } from 'reselect';
import { AppState } from '../../models';

const getState = (state: AppState) => state.searchPage;

export const selectData = createSelector(getState, (state) => state.data);

export const selectSearch = createSelector(getState, (state) => state.search);

export const selectIsLoading = createSelector(
    getState,
    (state) => state.isLoading
);
