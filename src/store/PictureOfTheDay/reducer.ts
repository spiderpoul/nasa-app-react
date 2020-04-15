import { PictureOfTheDayState } from '../../models';
import { ImageOfTheDayActionsTypes } from './actionsCreators';
import {
    MAIN_PAGE_NASA_IMAGE_OF_DAY_ERROR,
    MAIN_PAGE_NASA_IMAGE_OF_DAY_REQUEST,
    MAIN_PAGE_NASA_IMAGE_OF_DAY_SUCCESS,
} from './constants';

const initState: PictureOfTheDayState = {
    data: null,
    isLoading: false,
    error: null,
};

const PictureOfTheDayReducer = (
    state = initState,
    action: ImageOfTheDayActionsTypes
) => {
    switch (action.type) {
        case MAIN_PAGE_NASA_IMAGE_OF_DAY_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case MAIN_PAGE_NASA_IMAGE_OF_DAY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case MAIN_PAGE_NASA_IMAGE_OF_DAY_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        default:
            return state;
    }
};

export default PictureOfTheDayReducer;
