import React from 'react'
import styled from 'styled-components'

const StyledIntro = styled.div`
box-sizing: border-box;
position: relative;
display: flex;
padding: 0 5%;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100vh;

    p {
        color: white;
        font-size: 72px;
        width:750px;
        font-family: 'Spectral';
    }

   span {
       color: #F02D40;
       font-family: 'Spectral';
       font-size: 72px;
   }

   h1 {
       
   }
`


const Intro = () => {
    return (
        <StyledIntro data-scroll-section>
            <p data-scroll data-scroll-speed="3" data-scroll-direction="vertical" >Hi, I’m Gautier Burias, an <span>Interface Designer</span> from Paris. </p>
        </StyledIntro>
    )
}

export default Intro