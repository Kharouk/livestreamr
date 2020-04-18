import React from 'react';
import styled from 'styled-components';

import './App.css';

import Player from './components/Player';

const Wrapper = styled.div`
  video {
    width: 1000px;
    max-width: 100%;
  }
`;

function App() {
  return (
    <Wrapper>
      <header className="App-header">
        <Player />
      </header>
      </Wrapper>
  );
}

export default App;
