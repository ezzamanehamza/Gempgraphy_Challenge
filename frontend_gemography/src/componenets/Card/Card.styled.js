import styled from 'styled-components'

export const OuterBox = styled.div`
    display:grid;
    grid-template-columns: 100px auto;
    grid-gap: 1.5em;
    padding: 1em 1.5em;
    margin: 1.5em 1em;
    border: 1px solid #e2e2e2;
    box-shadow: 3px 3px 4px 1px #e2e2e2;
    font-family: "Roboto", sans-serif;
`;

export const Title = styled.h2`
width:100%;
    word-break: break-word;
    margin:0;
`;

export const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    justify-self:center;
    align-self:center;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 4px 4px 5px 2px #e2e2e2;
`;

export const InfoContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: minmax(0 , 1fr);
    max-height: max-content;
`;

export const Description = styled.p`
    overflow-y: auto;
    max-height:150px;
`;


export const CounterBox = styled.div`
    border: 0.5px solid #d5d5d5;
    box-shadow: 1px 1px 5px 1px #e5e5e5;
    border-radius: 3px; 
    align-self:center;
    font-size: medium;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
`;
export const CounterTitle = styled.div`
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding: 0.3em 0.6em;
    background: #e2e2e2;
    border-radius: 3px 0 0 3px;
    justify-self: start;
    align-self:start;
`;
export const CounterValue = styled.div`
    justify-self: center;
    align-self:center;
`;

export const SubmittedInfo = styled.div`
    align-self:center;
    font-size: medium;
`;

export const BottomInfo = styled.div`
    @media (max-width: 550px) {
        grid-template-columns: 1fr 1fr;

        ${SubmittedInfo}{
            grid-column:1 / -1;
        }
    }
    display: grid;
    width: 100%;
    grid-template-columns:120px 120px 1fr;
    grid-gap: 0.5em;
    align-content: end;
`;

