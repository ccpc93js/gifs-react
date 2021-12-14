import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GIfsContext'

const INITIAL_PAGE = 0

export default function useGifs({ keyword } = { keyword: null }) {


    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setloadingNextPage] = useState(false)

    const [page, setPage] = useState(INITIAL_PAGE)

    const { gifs, setGifs } = useContext(GifsContext)
    //recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamos la keyword del localStorage
                localStorage.setItem('lastKeyword', keyword)
            })

    }, [keyword, keywordToUse, setGifs])

    useEffect(() => {
        if (page === INITIAL_PAGE) return

        setloadingNextPage(true)

        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setloadingNextPage(false)

            })
    }, [keywordToUse, page,setGifs])

    return { loading, gifs,loadingNextPage, setPage}
}
