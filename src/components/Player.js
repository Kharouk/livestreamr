import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default ({ videoSrc }) => {
    const videoRef = useRef(null)
  
    useEffect(() => {
        const video = videoRef.current

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Safari
            video.src = videoSrc
        } else if (Hls.isSupported()) {
            // not safari
            const hls = new Hls()
            hls.loadSource(videoSrc)
            hls.attachMedia(video)
        } else {
            // why are you using IE 11 and below
            video.src = ''
        }

     }, [videoSrc, videoRef])

    return (
        <div>
            <br />
            <p>Video</p>
            <video  
                controls
                muted
                ref={videoRef} 
            />
            <br />
        </div>
    )
}
