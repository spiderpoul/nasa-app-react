import { UranusPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    URANUS_PAGE_NASA_ERROR,
    URANUS_PAGE_NASA_REQUEST,
    URANUS_PAGE_NASA_SUCCESS,
} from './constants';

const initState: UranusPageState = {
    data: null,
    isLoading: true,
    error: null,
};

const UranusReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case URANUS_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case URANUS_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case URANUS_PAGE_NASA_ERROR: {
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

export default UranusReducer;
