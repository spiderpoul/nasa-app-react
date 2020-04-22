import { PlutoPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    PLUTO_PAGE_NASA_ERROR,
    PLUTO_PAGE_NASA_REQUEST,
    PLUTO_PAGE_NASA_SUCCESS,
} from './constants';

const initState: PlutoPageState = {
    data: null,
    isLoading: true,
    error: null,
};

const PlutoReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case PLUTO_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case PLUTO_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case PLUTO_PAGE_NASA_ERROR: {
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

export default PlutoReducer;
