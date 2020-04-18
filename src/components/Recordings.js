import React from 'react'

import Player from './Player'

export default () => {
    return (
        <div>
            <h1>Recordings</h1>
            <Player videoSrc={'https://stream.mux.com/E9mOC1Uh0202QvnCCyq501ZMUUuUAtdNj9m.m3u8'} />
        </div>
    )
}
