import React from 'react'
import GifList from 'components/GifList';
import useGifs from 'hooks/useGifs';


export default function SearchResults({ params }) {
    const { keyword } = params
    const {loading, gifs} = useGifs({keyword})

    return (
        <>
            <h3 className="App-title">{decodeURI(keyword)}</h3>

            {
                loading
                    ? <i>Cargando🌀</i>
                    : <GifList gifs={gifs} />
            }
        </>
    )
}
