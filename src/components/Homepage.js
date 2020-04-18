import React from 'react'

import Nav from './Nav'
import LiveStreamPlayer from './LiveStreamPlayer'

const videoLsSrc = 'https://stream.mux.com/OuyruOOVG01gqN9K8CO341cbeBtA6brZF2oCFlUKbdck.m3u8'

export default () => {
    return (
        <div>
            <Nav />
            <header className="app-base-style">
                <LiveStreamPlayer videoSrc={videoLsSrc} />
            </header>
        </div>
    )
}
