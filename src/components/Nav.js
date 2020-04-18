import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-evenly;
    background: #292C34;
    padding: 10px 0;

    a {
        color: white;
    }

`

export default () => {
    return (
        <Wrapper>
            <Link to='/'>Homepage</Link>
            <Link to='/recordings'>Recordings</Link>
            <Link to='/mp4'>MP4 Videos</Link>
        </Wrapper>
    )
}
