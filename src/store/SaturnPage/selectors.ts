import { createSelector } from 'reselect';
import { AppState } from '../../models';

const getState = (state: AppState) => state.saturnPage;

export const selectData = createSelector(getState, (state) => state.data);

export const selectIsLoading = createSelector(
    getState,
    (state) => state.isLoading
);
