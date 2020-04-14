import {
    MAIN_PAGE_NASA_IMAGE_OF_DAY_REQUEST,
    MAIN_PAGE_NASA_IMAGE_OF_DAY_SUCCESS,
    MAIN_PAGE_NASA_IMAGE_OF_DAY_ERROR,
} from './constants';
import { PictureOfTheDayResponse } from '../../models';

interface ImageOfTheDayRequest {
    type: typeof MAIN_PAGE_NASA_IMAGE_OF_DAY_REQUEST;
}

interface ImageOfTheDaySuccess {
    type: typeof MAIN_PAGE_NASA_IMAGE_OF_DAY_SUCCESS;
    payload: {
        data: PictureOfTheDayResponse;
    };
}

interface ImageOfTheDayError {
    type: typeof MAIN_PAGE_NASA_IMAGE_OF_DAY_ERROR;
    payload: {
        error: any;
    };
}

export const imageOfTheDayRequest = (): ImageOfTheDayRequest => ({
    type: MAIN_PAGE_NASA_IMAGE_OF_DAY_REQUEST,
});

export const imageOfTheDaySuccess = ({ data }): ImageOfTheDaySuccess => ({
    type: MAIN_PAGE_NASA_IMAGE_OF_DAY_SUCCESS,
    payload: {
        data,
    },
});

export const imageOfTheDayError = ({ error }): ImageOfTheDayError => ({
    type: MAIN_PAGE_NASA_IMAGE_OF_DAY_ERROR,
    payload: {
        error,
    },
});

export type ImageOfTheDayActionsTypes =
    | ImageOfTheDayRequest
    | ImageOfTheDaySuccess
    | ImageOfTheDayError;
