import React, { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GIfsContext'

export default function useGifs({ keyword } = { keyword: null }) {


    const [loading, setLoading] = useState(false)

    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(() => {
        setLoading(true)
        //recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamos la keyword del localStorage
                localStorage.setItem('lastKeyword', keyword)
            })

    }, [keyword])

    return { loading, gifs }
}
