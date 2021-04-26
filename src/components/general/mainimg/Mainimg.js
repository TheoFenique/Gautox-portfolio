import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const StyledMainImg = styled.div`
.main-image__container--img {
    width: 100%;
    height: 1000px;
    max-height: calc(100vw/1.8);
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 150%;
    }
}

`

const MainImg = ({ img }) => {
    
    const [scroll, setScroll] = useState(window.scrollY / window.innerHeight);

    let scale = 1+(scroll)/6    
    let translate = scroll * -150

    useEffect(() => {

        const onScroll = () => {
            setScroll(window.scrollY / window.innerHeight)
        }

        window.addEventListener("scroll", () => {
            onScroll()
        });
    
        return () => window.removeEventListener("scroll", onScroll());
      }, []);

    return (
        <StyledMainImg img={img}>
            <div className="main-image__container--img">
                <img style={{transform: "scale("+scale+") translateY("+translate+"px)"}} src={img} alt="mainimg" />
            </div>
        </StyledMainImg>
    )
}

export default MainImg