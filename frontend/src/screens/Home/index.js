import React from 'react'
import './style.css'
import GifList from 'components/GifList'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import Spinner from 'components/Spinner'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm'

export default function Home() {
    const { loading, gifs } = useGifs()




    return (
        <>
        <Helmet>
            <title>Home | Gifs</title>
        </Helmet>
        <header className="o-header">
        <SearchForm />
      </header>

            <div className="App-main">

                <div className="App-results">

                    <h3 className="App-title">Ultima busqueda</h3>
                    {
                        loading
                            ? <Spinner />
                            : <GifList gifs={gifs} />
                    }
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}
