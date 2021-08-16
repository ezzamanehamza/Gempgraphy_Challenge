import styled from 'styled-components';

export const SpinnerContainer = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 2em;
    margin-bottom: 2em;
    font-family: "Roboto", sans-serif;
`;

export const ErrorContainer = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 2em;
    margin-bottom: 2em;
    font-family: "Roboto", sans-serif;
    background: #e45755;
    padding: 1em;
    margin: 1em;
    box-shadow: 1px 2px 10px 1px tomato;
`;

export const ErrorTitle = styled.h2`
    width:100%;
    height:100%;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    margin: 0;
`;

export const ErrorMessage = styled.div`
    width:100%;
    height:100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 80%;
`;