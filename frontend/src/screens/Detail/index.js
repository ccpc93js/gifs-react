import React from 'react'
import Gif from 'components/Gif'
import useGlobalGIfs from 'hooks/useGlobalGifs'

export default function Details({params}) {
    const gifs = useGlobalGIfs()

    const gif = gifs.find(signgleGif => signgleGif.id === params.id)
    return (
        <>
      <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif}/>
            
        </>
    )
}
