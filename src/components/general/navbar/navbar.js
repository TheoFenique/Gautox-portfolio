import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 48px 72px;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 100000000000000;
    .navbar__container--logo {

    }

    .navbar__container--links {
        display: flex;
        justify-content: space-between;
        width: 280px;
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
                <p>bg</p>
            </div>
            <div className="navbar__container--links">
                <a href="/">Home</a>
                <a href="/work">Work</a>
                <a href="">About me</a>
                <a href="">Contact</a>
            </div>
        </StyledNavbar>
    )
}

export default Navbar