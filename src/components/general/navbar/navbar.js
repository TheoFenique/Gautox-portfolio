import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logo from '../../../assets/navbar/logo.png'

const StyledNavbar = styled.div`
    box-sizing: border-box;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 116px;
    padding: 35px 5%;
    top: 0;
    left: 0;
    z-index: 100000000000000;
    .navbar__container--logo {
        height: 100%;

        img {
            height: 100%;
        }
    }

    .navbar__container--links {
        display: flex;
        justify-content: space-between;
        width: 200px;
    }

    p {
        margin: 0;
        color: red;
        font-family: circular;
    }

    a {
        color: white;
        text-decoration: none;
        font-family: circular;
    }
`


const Navbar = () => {
    return (
        <StyledNavbar>
            <div className="navbar__container--logo">
                <img src={logo} />
            </div>
            <div className="navbar__container--links">
                <Link to="/">Home</Link>
                <Link to="/work">Work</Link>
                <Link to="/">About</Link>
            </div>
        </StyledNavbar>
    )
}

export default Navbar