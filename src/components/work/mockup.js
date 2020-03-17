import React from 'react'
import styled from 'styled-components'

const StyledMockup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    padding: 40px;

    span {
        color: #9396A4;
        margin-bottom: 10px;
    }

    img {
        width: 286px;
        height: 587px;
    }
`

const Mockup = ({ title, img, direction, horizontal }) => {
    return (
        <StyledMockup data-scroll data-scroll-offset="-50%" data-scroll-speed={direction} data-scroll-direction={horizontal ? "horizontal" : "vertical"}>
            <span>{title}</span>
            <img src={img} alt="" />
        </StyledMockup>
    )
}

export default Mockup