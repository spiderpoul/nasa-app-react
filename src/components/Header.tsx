import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearch } from '../store/SearchPage/selectors';
import { SearchPageFilters } from '../store/SearchPage/reducer';
import { AppState, PictureOfTheDayResponse } from '../models';
import defaultBg from '../img/default-bg.jpg';

const HeaderContainer = styled.div`
    position: relative;
    height: 500px;
    width: 100%;
    background-color: #000;
    overflow: hidden;
`;

const HeaderImage = styled('div')<{ bgImage: string }>`
    background-image: url(${({ bgImage }) => bgImage});
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
`;

const SearchInput = styled.input`
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 780px;
    width: 100%;
    border-radius: 24px;
    padding: 12px 24px;
    font-size: 18px;
    box-shadow: 0 1px 2px 0 rgba(25, 27, 26, 0.1),
        0 1px 8px 0 rgba(25, 27, 26, 0.08);
    border: none;
    outline: none;
    z-index: 100;

    @media (max-width: 1224px) {
        width: 80%;
    }
`;

export const Header = () => {
    const search = useSelector(selectSearch);
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const { setSearch } = SearchPageFilters.bind(dispatch);
    const refInput = useRef<HTMLInputElement>(null);

    const pictureOfTheDay = useSelector<AppState>(
        (state) => state.pictureOfTheDay.data
    ) as PictureOfTheDayResponse;

    const onInput = useCallback(
        (e) => {
            setSearch({ search: e.target.value });
        },
        [setSearch]
    );

    useEffect(() => {
        if (search) {
            if (
                location.pathname !== '/search' &&
                refInput.current === document.activeElement
            ) {
                history.push({
                    pathname: '/search',
                });
            }
        } else {
            if (location.pathname === '/search') {
                history.push({
                    pathname: '/',
                });
            }
        }
    }, [history, location.pathname, search]);

    return (
        <HeaderContainer>
            {pictureOfTheDay && (
                <>
                    {pictureOfTheDay.media_type === 'video' ? (
                        <HeaderImage bgImage={defaultBg} />
                    ) : (
                        <HeaderImage bgImage={pictureOfTheDay.hdurl} />
                    )}
                </>
            )}
            <SearchInput
                value={search}
                ref={refInput}
                onChange={onInput}
                placeholder="Search for NASA images and videos"
            />
        </HeaderContainer>
    );
};
