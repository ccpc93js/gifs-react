import React, { useCallback, useEffect, useRef } from 'react'
import GifList from 'components/GifList';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import Spinner from 'components/Spinner';
// import useSEO from 'hooks/useSEO';
import { Helmet } from 'react-helmet';
import SearchForm from 'components/SearchForm';



export default function SearchResults({ params }) {
    const { keyword, rating='g' } = params
    const { loading, gifs,setPage} = useGifs({ keyword, rating })

    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once:false })

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : loading ? 'Cargando...' : ""
    // useSEO({title})

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
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={title}/>
            <meta name="rating" content="General"/>
        </Helmet>
        <header className="o-header">
        <SearchForm initialKeyword={keyword} initialRating={rating}/>
      </header>
            {
                loading
                    ? <Spinner/>
                    : <>
                        <h3 className="App-title">{decodeURI(keyword)}</h3>
                        <GifList gifs={gifs} />
                    </>
            }
           <div id="visor" ref={externalRef}></div>


        </>
    )
}
