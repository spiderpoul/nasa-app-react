import React from 'react';
import styled from 'styled-components';
import { APODFetcher } from '../../store/PictureOfTheDay/reducer';

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
    const { data } = APODFetcher.useData();

    return (
        <Container>
            {data && (
                <>
                    <Title>{data.title}</Title>
                    <Text>{data.explanation}</Text>
                    {data.media_type === 'video' ? (
                        <Video
                            frameBorder="0"
                            src={`${data.url}&autoplay=1&controls=0&showinfo=0&loop=1&autohide=1&mute=1`}
                        />
                    ) : (
                        <Image src={data.hdurl} />
                    )}
                </>
            )}
        </Container>
    );
};

export default PictureOfTheDay;
