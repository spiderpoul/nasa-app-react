import {
    VENUS_PAGE_NASA_ERROR,
    VENUS_PAGE_NASA_REQUEST,
    VENUS_PAGE_NASA_SUCCESS,
} from './constants';
import { LibraryResponse } from '../../models';

interface VenusPageRequest {
    type: typeof VENUS_PAGE_NASA_REQUEST;
}

interface VenusPageSuccess {
    type: typeof VENUS_PAGE_NASA_SUCCESS;
    payload: {
        data: LibraryResponse;
    };
}

interface VenusPageError {
    type: typeof VENUS_PAGE_NASA_ERROR;
    payload: {
        error: any;
    };
}

export const venusPageRequest = (): VenusPageRequest => ({
    type: VENUS_PAGE_NASA_REQUEST,
});

export const venusPageSuccess = ({ data }): VenusPageSuccess => ({
    type: VENUS_PAGE_NASA_SUCCESS,
    payload: {
        data,
    },
});

export const venusPageError = ({ error }): VenusPageError => ({
    type: VENUS_PAGE_NASA_ERROR,
    payload: {
        error,
    },
});

export type ActionsTypes = VenusPageRequest | VenusPageSuccess | VenusPageError;
