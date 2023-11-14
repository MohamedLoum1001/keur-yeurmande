import React from 'react'
import './Layout.css';
import NavBar from '../NavBar/NavBar'
import Hearder from '../Header/Hearder'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`

`;
const Layout = () => {
    return (
        <Wrapper>
            <Hearder />
            <NavBar />
            <Outlet />
        </Wrapper>
    )
}

export default Layout