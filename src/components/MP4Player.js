import React from 'react'

const MP4Player = ({ videoSrc }) => {
    return (
        <div>
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
