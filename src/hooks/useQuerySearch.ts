import querystring from 'querystring';
import { useLocation } from 'react-router-dom';

export const useQuerySearch = () => {
    const location = useLocation();
    return querystring.decode(location.search.replace(/\?q=/g, 'q='))
        .q as string;
};
