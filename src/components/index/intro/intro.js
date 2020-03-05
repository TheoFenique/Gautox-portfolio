import React from 'react'
import styled from 'styled-components'

const StyledIntro = styled.div`
    position: absolute;
    top: 30%;
    left: 72px;

    p {
        color: white;
        font-size: 72px;
        width:750px;
        font-family: 'Playfair Display';
    }

   span {
       color: #F02D40;
   }

   h1 {
       
   }
`


const Intro = () => {
    return (
        <StyledIntro>
            <p>Hi, I’m Gautier Burias, an <span>Interface Designer</span> from Paris. </p>
        </StyledIntro>
    )
}

export default Intro