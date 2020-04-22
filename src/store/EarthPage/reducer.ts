import { EarthPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    EARTH_PAGE_NASA_ERROR,
    EARTH_PAGE_NASA_REQUEST,
    EARTH_PAGE_NASA_SUCCESS,
} from './constants';

const initState: EarthPageState = {
    data: null,
    isLoading: true,
    error: null,
};

const EarthReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case EARTH_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case EARTH_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case EARTH_PAGE_NASA_ERROR: {
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

export default EarthReducer;
