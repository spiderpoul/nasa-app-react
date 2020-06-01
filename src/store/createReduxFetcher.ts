import { buildReducer, ReducerCur } from 'redux-blaze';
import { FetcherModel, AppState } from '../models';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';

export function createReduxFetcher<TModel>(arg: {
    prefix: string;
    fetcher: (...args: any[]) => Promise<TModel>;
    getState: (state: AppState) => FetcherModel<TModel>;
    mutate?: (res) => TModel;
}) {
    type InitialState = FetcherModel<TModel>;

    const initialState: InitialState = {
        data: null,
        isLoading: false,
        error: false,
    };

    const { prefix, fetcher, getState, mutate = (s) => s } = arg;

    type Reducer<TPayload> = ReducerCur<InitialState, TPayload>;

    const loadRequest: Reducer<{}> = () => (s) => ({ ...s, isLoading: true });

    const loadSuccess: Reducer<{ data: TModel }> = ({ data }) => (s) => ({
        ...s,
        data,
        isLoading: false,
        error: false,
    });

    const loadError: Reducer<{ error: any }> = ({ error }) => (s) => ({
        ...s,
        error,
        isLoading: false,
    });

    const { bind, actionCreators, reducer } = buildReducer(
        initialState,
        {
            loadRequest,
            loadSuccess,
            loadError,
        },
        { prefix }
    );

    let prefetched = false;

    const fetchData = (...args) => async (dispatch) => {
        const { loadError, loadRequest, loadSuccess } = bind(dispatch);
        loadRequest({});
        try {
            const data = await fetcher(...args);
            loadSuccess({ data: mutate(data) });
        } catch (error) {
            loadError({ error });
        }
    };

    const prefetch = (...args) => (dispatch) => {
        prefetched = true;
        dispatch(fetchData(...args));
    };

    const useData = (...args) => {
        const dispatch = useDispatch();
        const state = useSelector(getState);
        const loadData = useCallback(
            () => dispatch(fetchData(...args)),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [...args, dispatch]
        );

        useEffect(() => {
            if (!prefetched) {
                loadData();
            }
        }, [loadData]);

        return { ...state, loadData };
    };

    return {
        reducer: reducer,
        actions: actionCreators,
        useData,
        fetchData,
        prefetch,
    };
}
