import { createSelector } from 'reselect';
import { AppState } from '../../models';

const getPictureOfTheDayState = (state: AppState) => state.pictureOfTheDay;

export const selectPictureOfTheDayData = createSelector(
    getPictureOfTheDayState,
    (state) => state.data
);

export const selectPictureOfTheDayIsLoading = createSelector(
    getPictureOfTheDayState,
    (state) => state.isLoading
);
