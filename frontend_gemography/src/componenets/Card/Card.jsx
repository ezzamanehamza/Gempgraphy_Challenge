import React, {forwardRef} from 'react';
import {
    OuterBox,
    ImageContainer,
    Image,
    InfoContainer,
    Title,
    Description,
    BottomInfo,
    CounterBox,
    CounterTitle,
    CounterValue,
    SubmittedInfo
} from './Card.styled' 

const Card = forwardRef(({imageSrc,imgAlt, title, description, stars, issues, submitted, author }, ref) => {
    return (
        <OuterBox ref={ref}>
            <ImageContainer>
                <Image src={imageSrc} alt={imgAlt}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <BottomInfo>
                    <CounterBox>
                        <CounterTitle>Stars:</CounterTitle>
                        <CounterValue>{stars}</CounterValue>
                    </CounterBox>
                    <CounterBox> 
                        <CounterTitle>Issues:</CounterTitle>
                        <CounterValue>{issues}</CounterValue>
                    </CounterBox>
                    <SubmittedInfo>Submitted {submitted ? submitted === 1 ? `${submitted} day ago` : `${submitted} days ago` : 'today' } by {author}</SubmittedInfo>
                </BottomInfo>
            </InfoContainer>
        </OuterBox>
    );
});

export default Card;