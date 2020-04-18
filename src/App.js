import React from 'react';
import styled from 'styled-components';

import './App.css';

import Player from './components/Player';

const videoSrc = 'https://stream.mux.com/OuyruOOVG01gqN9K8CO341cbeBtA6brZF2oCFlUKbdck.m3u8'


const Wrapper = styled.div`
  * {
    text-align: center;
  }
  video {
    width: 1000px;
    max-width: 100%;
  }
`;

function App() {
  return (
    <Wrapper>
      <header className="App-header">
        <Player videoSrc={videoSrc} />
      </header>
      </Wrapper>
  );
}

export default App;
