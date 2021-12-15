import React, { useCallback, useEffect, useRef } from 'react'
import GifList from 'components/GifList';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';


export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs,setPage} = useGifs({ keyword })

    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once:false })
    // const handleNextPage = () => setPage(prevPage => prevPage + 1)


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncehandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1),200

    ), [setPage])

    useEffect(() => {
        console.log(isNearScreen);
        if(isNearScreen) debouncehandleNextPage()

    }, [debouncehandleNextPage, isNearScreen])

    return (
        <>
            {
                loading
                    ? <i>Cargando...🌀</i>
                    : <>
                        <h3 className="App-title">{decodeURI(keyword)}</h3>
                        <GifList gifs={gifs} />
                    </>
            }
           <div id="visor" ref={externalRef}></div>

            {/* <br />
            <button onClick={handleNextPage}>Next</button> */}
        </>
    )
}
