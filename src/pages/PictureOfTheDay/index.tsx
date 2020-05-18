import React from 'react';
import styled from 'styled-components';
import { selectPictureOfTheDayData } from '../../store/PictureOfTheDay/selectors';
import { useSelector } from 'react-redux';

const Text = styled.div`
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 24px;
`;

const Container = styled.div`
    padding: 24px;
`;

const Image = styled('img')`
    max-width: 100%;
    height: auto;
    width: 100%;
`;

const Video = styled.iframe`
    min-height: 600px;
    width: 100%;
`;

const Title = styled.div`
    font-size: 36px;
    font-weight: bold;
    color: darkcyan;
    margin-bottom: 24px;
`;

const PictureOfTheDay = () => {
    const pictureOfTheDay = useSelector(selectPictureOfTheDayData);

    return (
        <Container>
            {pictureOfTheDay && (
                <>
                    <Title>{pictureOfTheDay.title}</Title>
                    <Text>{pictureOfTheDay.explanation}</Text>
                    {pictureOfTheDay.media_type === 'video' ? (
                        <Video frameBorder="0" src={`${pictureOfTheDay.url}`} />
                    ) : (
                        <Image src={pictureOfTheDay.hdurl} />
                    )}
                </>
            )}
        </Container>
    );
};

export default PictureOfTheDay;
