import { PictureOfTheDayResponse, LibraryResponse } from '.';

export interface AppState {
    pictureOfTheDay: PictureOfTheDayState;
    mercuryPage: MercuryPageState;
    venusPage: VenusPageState;
    earthPage: FetcherModel<LibraryResponse>;
    marsPage: MarsPageState;
    jupiterPage: JupiterPageState;
    saturnPage: SaturnPageState;
    uranusPage: UranusPageState;
    neptunePage: NeptunePageState;
    plutoPage: PlutoPageState;
    moonPage: MoonPageState;
    searchPage: SearchPageState;
}

export interface FetcherModel<TModel> {
    data: TModel | null;
    isLoading: boolean;
    error: boolean;
}

export interface PictureOfTheDayState {
    isLoading: boolean;
    error: any;
    data: PictureOfTheDayResponse | null;
}

export interface SearchPageState {
    model: FetcherModel<LibraryResponse>;
    filters: SearchFiltersState;
}

export interface SearchFiltersState {
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
