import React from 'react'
import GifList from 'components/GifList';
import useGifs from 'hooks/useGifs';


export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs,setPage } = useGifs({ keyword })
    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return (
        <>
            {
                loading
                    ? <i>Cargando🌀</i>
                    : <>
                        <h3 className="App-title">{decodeURI(keyword)}</h3>
                        <GifList gifs={gifs} />
                    </>
            }
            <br />
            <button onClick={handleNextPage}>Next</button>
        </>
    )
}
