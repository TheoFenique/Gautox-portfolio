import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledIntro = styled.div`
box-sizing: border-box;
position: relative;
display: flex;
padding: 0 5%;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100vh;

    h1 {
        color: white;
        font-size: 72px;
        width:750px;
        font-family: 'Spectral';

        @media screen and (max-width : 414px) {
            font-size: 48px
        }

        span {
            color: #F02D40;
            font-family: 'Spectral';
            font-size: 72px;

            @media screen and (max-width : 414px) {
                font-size: 48px
            }
        }
    }

    p a {
        position: absolute;
        top: 65%;
        right: 5%;
        font-size: 120px;
        font-family: 'Spectral';
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;
        color: rgba(255,255,255,0);
        text-decoration: none;
        transition: 0.6s all;

        @media screen and (max-width: 414px) {
            top: 70%;
        }

        &:hover {
            color: rgba(255,255,255,1); 
            transform: translateX(4%);
        }
    }
`


const Intro = () => {
    return (
        <StyledIntro data-scroll-section>
            <h1 data-scroll data-scroll-speed="3" data-scroll-direction="vertical" >Hi, I’m Gautier Burias, an <span>Interface Designer</span> from Paris. </h1>
            <p><Link to="/work">Work</Link></p>
        </StyledIntro>
    )
}

export default Intro