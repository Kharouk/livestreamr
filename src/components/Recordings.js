import React from 'react'
import Nav from './Nav'

import Player from './Player'

const recordedURLS = [
    'https://stream.mux.com/E9mOC1Uh0202QvnCCyq501ZMUUuUAtdNj9m.m3u8',
    'https://stream.mux.com/Gwx25DUzUAVp4asH7YQdevuUE5x5UPagX94HsOqQpkc.m3u8'
]

export default () => {
    return (
        <>
            <Nav />
            <div className="app-base-style">
                <h1>Recordings</h1>
                {recordedURLS.map(url => {
                    return <Player key={url} videoSrc={url} />
                })}
            </div>
        </>
    )
}
