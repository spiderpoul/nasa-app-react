import { API_URL_IMAGE_OF_THE_DAY } from './constants';
import { createReduxFetcher } from '../createReduxFetcher';
import { PictureOfTheDayResponse } from '../../models';
import Axios from 'axios';

export const APODFetcher = createReduxFetcher<PictureOfTheDayResponse>({
    fetcher: () => Axios.get(API_URL_IMAGE_OF_THE_DAY),
    getState: (state) => state.pictureOfTheDay,
    mutate: (res) => res.data,
    prefix: 'PICTURE_OF_THE_DAY',
});

export default APODFetcher.reducer;
