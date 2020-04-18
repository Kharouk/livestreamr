import React from 'react'

const MP4Player = ({ videoSrc, mp4File }) => {
    return (
        <>
        <div className='app-base-style'>
            <h1>Basic MP4 video</h1>
            {console.log(mp4File)}
            {/* MP4 VIDEO: Not adaptive like HLS */}
            <video
                controls
                muted
                src={videoSrc}
            />
            {mp4File && <a href={mp4File}>Download</a>}
        </div>
        </>
    )
}

export default MP4Player
