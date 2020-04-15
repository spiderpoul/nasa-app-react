import { PictureOfTheDayResponse, LibraryResponse } from '.';

export interface AppState {
    pictureOfTheDay: PictureOfTheDayState;
    mercuryPage: MercuryPageState;
}

export interface PictureOfTheDayState {
    isLoading: boolean;
    error: any;
    data: PictureOfTheDayResponse | null;
}

export interface MercuryPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}
