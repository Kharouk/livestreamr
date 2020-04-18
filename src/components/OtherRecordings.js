import React from 'react'
import MP4Player from './MP4Player'
import Nav from './Nav'

export default  () => {
    return (
        <>
            <Nav />
            <div className='app-base-styles'>
                <MP4Player
                    mp4File='https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4?download=test.mp4' 
                    videoSrc='https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'
                />
            </div>
        </>
    )
}
