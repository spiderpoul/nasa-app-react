import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
    const [imageOfTheDay, setImageOfTheDay] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data: any = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=dZmuqhbS2Esu9rTmTrtjb2pMOYi9QgpuvicXyqEK`
            );
            const res = await data?.json();
            setImageOfTheDay(res);
        };

        fetchData();
    }, []);

    return (
        <Container>
            {imageOfTheDay && (
                <>
                    <Title>{imageOfTheDay.title}</Title>
                    <Text>{imageOfTheDay.explanation}</Text>
                    {imageOfTheDay.media_type === 'video' ? (
                        <Video
                            frameBorder="0"
                            src={`${imageOfTheDay.url}&autoplay=1&controls=0&showinfo=0&loop=1&autohide=1&mute=1`}
                        />
                    ) : (
                        <Image src={imageOfTheDay.hdurl} />
                    )}
                </>
            )}
        </Container>
    );
};

export default PictureOfTheDay;
