import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../../assets/style/colors'

const StyledIntro = styled.div`
box-sizing: border-box;
position: relative;
display: flex;
padding: 0;
justify-content: flex-start;
width: 100%;
height: 250px;
margin-top: 150px;



    h1, p {
        color: ${props=>props.colors.contentDark};
        font-size: 32px;
        width:750px;
        font-family: 'nueue-bold';
        line-height: 1.5;

        @media screen and (max-width : 414px) {
            font-size: 48px
        }

        span {
            color:  ${props=>props.colors.contentDarker};
            font-family: 'nueue-bold';
            font-size: 32px;

            @media screen and (max-width : 414px) {
                font-size: 48px
            }
        }
    }
`


const Intro = () => {
    return (
        <StyledIntro colors={colors} data-scroll-section>
            <div data-scroll data-scroll-speed="1" data-scroll-direction="vertical" className="container">
                <p>Hey!</p>
                <h1>I’m <span>Gautier Burias</span> !<br/> I’m a <span>Product Designer</span> from Paris<br/> & design student at <span>Hetic</span>.</h1>
            </div>
        </StyledIntro>
    )
}

export default Intro