import React, { useState, useRef, useCallback } from 'react';
import Card from "../../componenets/Card";
import useFetch from '../../hooks/useFetch';
import { dateDiff, numberFormatter } from "../../utils/utils";
import PulseLoader from 'react-spinners/PulseLoader';
import {
    SpinnerContainer,
    ErrorContainer,
    ErrorTitle,
    ErrorMessage
}from './CardsContainer.styled'

const CardsContainer = () => {

    const [pageNumber, setPageNumber] = useState(1)
    const { loading, error, repos, hasMore } = useFetch(pageNumber)

    const observerRef = useRef()
    const lastRepoRef = useCallback(node => {
        if(loading) return
        if(observerRef.current) observerRef.current.disconnect()
        observerRef.current = new IntersectionObserver(entries =>{
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPage=> prevPage + 1)
            }
        })
        if(node) observerRef.current.observe(node)
    }, [loading, hasMore]) 


    return (
        <React.Fragment>
            {repos.map((repo, index) => {

                if(repos.length === index + 1){
                    return (
                        <Card 
                            ref={lastRepoRef}
                            key={repo.id} 
                            imageSrc={repo.owner.avatar_url}
                            title={repo.name}
                            description={repo.description}
                            submitted={dateDiff(repo.created_at)}
                            author={repo.owner.login}
                            stars={numberFormatter(repo.stargazers_count)}
                            issues={numberFormatter(repo.open_issues_count)}
                        />)
                }else{
                    return (
                    <Card 
                        key={repo.id} 
                        imageSrc={repo.owner.avatar_url}
                        title={repo.name}
                        description={repo.description}
                        submitted={dateDiff(repo.created_at)}
                        author={repo.owner.login}
                        stars={numberFormatter(repo.stargazers_count)}
                        issues={numberFormatter(repo.open_issues_count)}
                    />)
                }
            })}
            {loading && 
                <SpinnerContainer>
                    <PulseLoader size={15} color={'#CCC'}/>
                </SpinnerContainer>
            }
            {error && 
                <ErrorContainer>
                    <ErrorTitle>
                        Something went wrong &#x1F61E; 
                    </ErrorTitle>
                    <ErrorMessage>
                        <div><strong>Status code:</strong> {error.status}</div>
                        <div><strong>Message:</strong> {error.message}</div>
                    </ErrorMessage>
                </ErrorContainer>}
        </React.Fragment>
    );
};

export default CardsContainer;