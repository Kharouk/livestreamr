import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`

`

export default () => {
    return (
        <nav>
            <Link to='/'>Homepage</Link>
            <Link to='/recordings'>Recordings</Link>
            <Link to='/mp4'>MP4 Videos</Link>
        </nav>
    )
}
