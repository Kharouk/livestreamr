import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import styled from 'styled-components'

import Homepage from './components/Homepage'
import Recordings from './components/Recordings'
import OtherRecordings from './components/OtherRecordings'

import './App.css';

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
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/recordings' component={Recordings}/>
          <Route path='/mp4' component={OtherRecordings}/>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
