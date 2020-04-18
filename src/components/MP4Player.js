import React from 'react'
import Nav from './Nav'

const MP4Player = ({ videoSrc }) => {
    return (
        <div>
            <Nav />
            <h1>Basic MP4 video</h1>
            {/* MP4 VIDEO: Not adaptive like HLS */}
            <video
                controls
                muted
                src={videoSrc}
            />
        </div>
    )
}

export default MP4Player
