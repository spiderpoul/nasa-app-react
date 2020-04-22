import { SearchPageState } from '../../models';
import { ActionsTypes } from './actionsCreators';
import {
    SEARCH_PAGE_NASA_ERROR,
    SEARCH_PAGE_NASA_REQUEST,
    SEARCH_PAGE_NASA_SUCCESS,
    SEARCH_PAGE_SET_SEARCH,
} from './constants';

const initState: SearchPageState = {
    data: null,
    isLoading: true,
    error: null,
    search: '',
};

const SearchReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case SEARCH_PAGE_NASA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case SEARCH_PAGE_NASA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
            };
        }
        case SEARCH_PAGE_SET_SEARCH: {
            return {
                ...state,
                isLoading: false,
                search: action.payload.search,
            };
        }
        case SEARCH_PAGE_NASA_ERROR: {
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

export default SearchReducer;
