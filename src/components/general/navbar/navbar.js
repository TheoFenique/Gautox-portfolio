import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logo from '../../../assets/navbar/logo.png'
import { colors } from '../../../assets/style/colors'

const StyledNavbar = styled.div`
box-sizing: border-box;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 116px;
top: 0;
left: 0;
z-index: 100000000000000;

.navbar__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 35px auto;
}

.navbar__container--logo {
    height: 100%;

    span {
        font-size: 32px;
        font-family: 'nueue-bold';
        color: ${props=>props.colors.contentDarker}
    }
}

.navbar__container--links {
    display: flex;
    justify-content: space-between;
    a {
        font-family: 'nueue-regular';
        color: ${props=>props.colors.contentDarker};
        transition: 0.2s color;
        margin-left: 56px;
    }
}

p {
    margin: 0;
    font-family: circular;
}


a:hover {
    color: ${props=>props.colors.contentDark}
}
`


const Navbar = () => {
    return (
        <StyledNavbar colors={colors}>
            <div className="navbar__container">
                <div className="navbar__container--logo">
                    <Link to="/"><span>G</span></Link>
                </div>
                <div className="navbar__container--links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </StyledNavbar>
    )
}

export default Navbar