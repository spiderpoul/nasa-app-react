import { MoonPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    MOON_PAGE_NASA_ERROR,
    MOON_PAGE_NASA_REQUEST,
    MOON_PAGE_NASA_SUCCESS,
} from './constants';

const initState: MoonPageState = {
    data: null,
    isLoading: true,
    error: null,
};

const MoonReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case MOON_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case MOON_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case MOON_PAGE_NASA_ERROR: {
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

export default MoonReducer;
