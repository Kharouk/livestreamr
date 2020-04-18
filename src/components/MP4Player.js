import React from 'react'
import Nav from './Nav'

const MP4Player = ({ videoSrc }) => {
    return (
        <>
        <Nav />
        <div className='app-base-style'>
            <h1>Basic MP4 video</h1>
            {/* MP4 VIDEO: Not adaptive like HLS */}
            <video
                controls
                muted
                src={'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4'}
            />
        </div>
        </>
    )
}

export default MP4Player
