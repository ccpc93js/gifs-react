import React from 'react'
import './style.css'
import Gif from '../Gif'

export default function GifList({ gifs }) {

    return (
        <div className="GifList">
            {gifs.map(({ id, title, url }) => (
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            ))}
        </div>
    )


}
