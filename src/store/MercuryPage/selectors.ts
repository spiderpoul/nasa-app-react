import { createSelector } from 'reselect';
import { AppState } from '../../models';

const getState = (state: AppState) => state.mercuryPage;

export const selectMercuryData = createSelector(
    getState,
    (state) => state.data
);

export const selectMercuryIsLoading = createSelector(
    getState,
    (state) => state.isLoading
);
