import React, { useEffect, createRef } from 'react'
import Hls from 'hls.js'

const videoSrc = 'https://stream.mux.com/E9mOC1Uh0202QvnCCyq501ZMUUuUAtdNj9m.m3u8'

export default () => {
  const videoRef = createRef(null)
  
  useEffect(() => {
    const video = videoRef.current
    if(Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(videoSrc)
      hls.attachMedia(video)
    }
    
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc
    }


  }, [videoRef])

  return (
    <div>
      <h2>Best Player</h2>
      <video
        ref={videoRef}
        controls
        src='https://stream.mux.com/E9mOC1Uh0202QvnCCyq501ZMUUuUAtdNj9m.m3u8'      
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
