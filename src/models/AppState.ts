import { PictureOfTheDayResponse, LibraryResponse } from '.';

export interface AppState {
    pictureOfTheDay: PictureOfTheDayState;
    mercuryPage: MercuryPageState;
    venusPage: VenusPageState;
    earthPage: EarthPageState;
    marsPage: MarsPageState;
    jupiterPage: JupiterPageState;
    saturnPage: SaturnPageState;
    uranusPage: UranusPageState;
    neptunePage: NeptunePageState;
    plutoPage: PlutoPageState;
    moonPage: MoonPageState;
    searchPage: SearchPageState;
}

export interface PictureOfTheDayState {
    isLoading: boolean;
    error: any;
    data: PictureOfTheDayResponse | null;
}

export interface SearchPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
    search: string;
}

export interface MercuryPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}

export interface VenusPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}
export interface EarthPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}

export interface MarsPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}
export interface JupiterPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}
export interface SaturnPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}
export interface UranusPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}
export interface NeptunePageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}
export interface PlutoPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}
export interface MoonPageState {
    isLoading: boolean;
    error: any;
    data: LibraryResponse | null;
}
