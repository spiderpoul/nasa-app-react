import { PictureOfTheDayResponse } from '.';

export interface AppState {
    pictureOfTheDay: PictureOfTheDayState;
}

export interface PictureOfTheDayState {
    isLoading: boolean;
    error: any;
    data: PictureOfTheDayResponse | null;
}
