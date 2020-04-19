import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

export default ({ thumbnailSrc, videoSrc, mp4File }) => {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Safari
            video.src = videoSrc
        } else if (Hls.isSupported()) {
            // not safari
            const hls = new Hls()

            const loadHls = (videoSrc, video) => {
                hls.loadSource(videoSrc)
                hls.attachMedia(video)
                video.play()
                video.removeEventListener('click', loadHls)
            }
            // Debug Chrome's issue where thumbnails are not working
            // have to create hacky solution just to display thumbnails.
            if (isChrome) {
                // video.addEventListener('click', () => loadHls(videoSrc, video))
                hls.loadSource(videoSrc)
                hls.attachMedia(video)
            }
            // Firefox
            hls.loadSource(videoSrc)
            hls.attachMedia(video)
        } else {
            // why are you using IE 11 and below
            console.error('Browser is not supported')
            video.src = ''
        }

    }, [videoSrc, videoRef])

    return (
        <div>
            {console.log(mp4File)}
            <br />
            <video
                poster={thumbnailSrc}
                controls
                muted
                ref={videoRef}
            />
            {mp4File && <a href={mp4File}>Download</a>}
            <br />
        </div>
    )
}
