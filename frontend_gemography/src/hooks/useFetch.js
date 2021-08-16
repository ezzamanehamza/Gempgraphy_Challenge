import { useEffect, useState } from 'react'
import axios from 'axios'
import {getRangeDate} from '../utils/utils'

const useFetch = (pageNumber) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [repos, setRepos] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError('')

        axios({
            method: 'GET',
            url: 'https://api.github.com/search/repositories',
             params: { 
                q: `created:>${getRangeDate()}`, 
                sort: 'stars', 
                order:'desc', 
                page: pageNumber
            }
        }).then(response => {
            setRepos(prevRepos => [...prevRepos, ...response.data.items.map(item => item)])
            setHasMore(response.data.total_count > 0)
            setLoading(false)
        }).catch( e => {
            setError({message: e.response.data.message , status: e.response.status})
        })
    }, [pageNumber])

    return { loading, error, repos, hasMore }
}

export default useFetch;