import React from 'react'
import styled from 'styled-components'
import gautierbae from '../../../assets/index/gautierisbae.jpeg'
import gautierlooking from '../../../assets/index/gautierislookingaway.jpeg'

const StyledAbout = styled.div`
display: flex;
justify-content: space-between;
padding: 0 5%;
height: calc(100vh - 116px);

h2 {
    color: white;
    font-size: 28px;
}

p {
    width: 378px;
    color: #9396A4;
    text-align: justify;
    line-height: 1.8;
}

.about__container--passions {
    position: relative;
    width: 100%;
    .passion__container--first, .passion__container--second {

        img {
            width: 100%;
        }
    }

    .first__container {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 35%;
        right: 0%;
        span {
            position: absolute;
            right: 80%;
            color: white;
            font-family: 'spectral';
            font-size: 72px;
        }
    }
    .second__container {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 35%;
        top: 250px;
        span {
            position: absolute;
            left: 80%;
            color: white;
            font-family: 'spectral';
            font-size: 72px;
        }
    }
}
`

const About = () => {
    return (
        <StyledAbout data-scroll-section>
            <div data-scroll className="about__container--content">
                <h2>About</h2>
                <p>I’m a 20 years old interface designer and a third student at Hetic. I’m looking for a five-month internship starting early March 2020 in Japan but interested about anywhere in the world. I’m also passionate about video games, animes and I listen to music 24/7.</p>
            </div>
            <div data-scroll className="about__container--passions">
                <div data-scroll data-scroll-speed="-0.7" data-scroll-offset="-50%" className="passion__container--first">
                    <div data-scroll className="first__container">
                        <div data-scroll className="passionimg__container">
                            <img src={gautierbae} alt="" />
                        </div>
                        <span>Music</span>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="-1" data-scroll-offset="-50%" className="passion__container--second">
                    <div data-scroll className="second__container">
                        <div data-scroll className="passionimg__container">
                            <img src={gautierlooking} alt="" />
                        </div>
                        <span>Anime</span>
                    </div>
                </div>
            </div>


        </StyledAbout>
    )
}

export default About