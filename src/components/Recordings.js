import React from 'react'
import Nav from './Nav'

import Player from './Player'

const recordedPlaybackIds = [
    {
        playbackId: 'n3iiuIX49Y4lhnTL02hsWpJJmwSQqBWlesVZ6i5bEvV8',
        thumbnailType: 'animated.gif', 
        thumbnailTime: 3,
        mp4File: 'high.mp4'
    },
    {
        playbackId: 'E9mOC1Uh0202QvnCCyq501ZMUUuUAtdNj9m',
        thumbnailType: 'thumbnail.jpg', 
        thumbnailTime: 3
    },
    {
        playbackId: 'Gwx25DUzUAVp4asH7YQdevuUE5x5UPagX94HsOqQpkc',  
        thumbnailType: 'thumbnail.jpg', 
        thumbnailTime: 1
    },
    {
        playbackId: 'SupLSBC8D9d00tYyU9BZp3kT7kf1ZwUA01oaKd02yFkG9U',  
        thumbnailType: 'animated.gif',
        thumbnailTime: 20
    }

]

export default () => {
    return (
        <>
            <Nav />
            <div className="app-base-style">
                <h1>Recordings</h1>
                {recordedPlaybackIds.map(({ playbackId, thumbnailTime, thumbnailType, mp4File }) => {
                    const thumbnailSrc = `https://image.mux.com/${playbackId}/${thumbnailType}?time=${thumbnailTime}`
                    const mp4FileLink = `https://stream.mux.com/${playbackId}/${mp4File}?download=video.mp4`
                    return (
                        <>
                            <Player 
                                mp4File={mp4File ? mp4FileLink : null}
                                key={playbackId} 
                                thumbnailSrc={thumbnailSrc}
                                videoSrc={`https://stream.mux.com/${playbackId}.m3u8`}
                            />
                        </>
                    )
                })}
            </div>
        </>
    )
}
