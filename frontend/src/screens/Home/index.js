import React, { useState } from 'react'
import './style.css'
import { useLocation } from 'wouter'
import GifList from 'components/GifList'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'


export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    console.log(path);


    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setKeyword(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text" 
                    value={keyword}
                    placeholder="Search a gif..."
                />
                <button type="submit">Buscar</button>
            </form>
            <div className="App-main">

            <div className="App-results">

            <h3 className="App-title">Ultima busqueda</h3>
            {
                loading
                ? <i>Cargando🌀</i>
                : <GifList gifs={gifs} />
            }
            </div>
            <div className="App-category">
                <TrendingSearches/>
            </div>
            </div>
        </>
    )
}
