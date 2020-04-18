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
      console.error('Oh no, this feature is not supported!')
    }

  }, [videoSrc, videoRef])

  return (
    <div>
      <h2>Live Stream URL</h2>
      <video
        ref={videoRef}
        controls     
      />
      <br />
      {/* MP4 VIDEO: Not adaptive like HLS */}
      <video  
        controls
        muted
        src='https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' 
      />
      </div>
    )
}
