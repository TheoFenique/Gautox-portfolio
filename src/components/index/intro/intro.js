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
margin-top: 150px;

    .container {
        max-width:100%;
        margin-bottom: 80px;
    }

    h1, p {
        color: ${props=>props.colors.content};
        font-size: 32px;
        width:750px;
        max-width: 100%;
        font-family: 'nueue-bold';
        line-height: 1.5;

        span {
            color:  ${props=>props.colors.contentDarker};
            font-family: 'nueue-bold';
            font-size: 32px;

        }
    }
`


const Intro = () => {
    return (
        <StyledIntro colors={colors}>
            <div className="container">
                <p>Hey!</p>
                <h1>I’m <span>Gautier Burias</span> !<br/> I’m a <span>Product Designer</span> from Paris<br/> & design student at <span>Hetic</span>.</h1>
            </div>
        </StyledIntro>
    )
}

export default Intro