import React from 'react'
import styled from 'styled-components'

const StyledMainImg = styled.div`
.main-image__container--img {
    width: 100%;
    height: 75vh;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        margin: 50px auto;

        @media screen and (max-width : 1000px) {
            width: 200%;
        }
    }
}

`

const MainImg = ({ img }) => {
    return (
        <StyledMainImg>
            <div className="main-image__container--img">
                <img data-scroll data-scroll-speed="-1.1" data-scroll-offset="-100%, -100%" src={img} alt="mainimg" />
            </div>
        </StyledMainImg>
    )
}

export default MainImg