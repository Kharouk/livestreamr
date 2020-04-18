import React from 'react'
import styled from 'styled-components';

import Player from './Player';
import LiveStreamPlayer from './LiveStreamPlayer'
import MP4Player from './MP4Player'

const videoLsSrc = 'https://stream.mux.com/OuyruOOVG01gqN9K8CO341cbeBtA6brZF2oCFlUKbdck.m3u8'
const videoSrc = 'https://stream.mux.com/E9mOC1Uh0202QvnCCyq501ZMUUuUAtdNj9m.m3u8'

const Wrapper = styled.div`
  * {
    text-align: center;
  }
  video {
    width: 1000px;
    max-width: 100%;
  }
`;

export default () => {
    return (
        <Wrapper>
            <header className="App-header">
                <LiveStreamPlayer videoSrc={videoLsSrc} />
                <Player videoSrc={videoSrc} />
                <MP4Player videoSrc='https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4' />
            </header>
        </Wrapper>
    )
}
