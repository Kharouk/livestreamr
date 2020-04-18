import React from 'react'
import Nav from './Nav'

import Player from './Player'

const recordedPlaybackIds = [
    'E9mOC1Uh0202QvnCCyq501ZMUUuUAtdNj9m',
    'Gwx25DUzUAVp4asH7YQdevuUE5x5UPagX94HsOqQpkc',
    'SupLSBC8D9d00tYyU9BZp3kT7kf1ZwUA01oaKd02yFkG9U'

]

export default () => {
    return (
        <>
            <Nav />
            <div className="app-base-style">
                <h1>Recordings</h1>
                {recordedPlaybackIds.map(playbackId => {
                    return <Player key={playbackId} videoSrc={`https://stream.mux.com/${playbackId}.m3u8`} />
                })}
            </div>
        </>
    )
}
