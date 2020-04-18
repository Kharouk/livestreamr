import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'



export default () => {
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])

  return (
    <div>
      <h2>Best Player</h2>
      {/* MP4 VIDEO: Not adaptive like HLS */}
      <video  
        controls
        muted
        src='https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' 
      />

      <video 
        controls
        src='https://stream.mux.com/E9mOC1Uh0202QvnCCyq501ZMUUuUAtdNj9m.m3u8'      
      />
      </div>
    )
}
