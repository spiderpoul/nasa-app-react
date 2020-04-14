import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import { useSelector } from 'react-redux';
import { selectPictureOfTheDayData } from '../store/PictureOfTheDay/selectors';

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

const HeaderVideo = styled.iframe`
    height: 100%;
    width: 100%;
`;

const SearchInput = styled.input`
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translateX(-50%);
    width: 780px;
    border-radius: 24px;
    padding: 12px 24px;
    font-size: 18px;
    box-shadow: 0 1px 2px 0 rgba(25, 27, 26, 0.1),
        0 1px 8px 0 rgba(25, 27, 26, 0.08);
    border: none;
    outline: none;
`;

export const Header = () => {
    const [search, setSearch] = useState('');
    const searchDebounced = useDebounce(search);
    const history = useHistory();

    const pictureOfTheDay = useSelector(selectPictureOfTheDayData);

    const onInput = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    useEffect(() => {
        if (!searchDebounced) return;
        history.push({
            pathname: '/search',
            search: `?q=${searchDebounced}`,
        });
    }, [history, searchDebounced]);

    return (
        <HeaderContainer>
            {pictureOfTheDay && (
                <>
                    {pictureOfTheDay.media_type === 'video' ? (
                        <HeaderVideo
                            frameBorder="0"
                            src={`${pictureOfTheDay.url}&autoplay=1&controls=0&showinfo=0&loop=1&autohide=1&mute=1`}
                        />
                    ) : (
                        <HeaderImage bgImage={pictureOfTheDay.hdurl} />
                    )}
                </>
            )}
            <SearchInput
                value={search}
                onChange={onInput}
                placeholder="Search for NASA images and videos"
            />
        </HeaderContainer>
    );
};
