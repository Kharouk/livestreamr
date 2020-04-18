import React from 'react'

import Nav from './Nav'
import LiveStreamPlayer from './LiveStreamPlayer'

const videoLsSrc = 'https://stream.mux.com/gHB6WttSBP2m6FsLog00Ezlag7gLP2Ajh02Y5QHhZicDk.m3u8'

export default () => {
    return (
        <div>
            <Nav />
            <header className="app-base-style">
                <h1>The Best Live Stream</h1>
                <LiveStreamPlayer videoSrc={videoLsSrc} />
            </header>
        </div>
    )
}
