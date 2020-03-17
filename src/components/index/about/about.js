import React from 'react'
import styled from 'styled-components'
import gautierlooking from '../../../assets/index/gautierislookingaway.jpg'
import anime from '../../../assets/index/anime.png'
import eden from '../../../assets/index/eden.png';


const StyledAbout = styled.div`
.about__container--main {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    height: calc(100vh - 116px);
    max-width: 1600px;
    margin: auto;

    @media screen and (max-width : 414px) {
        flex-direction: column-reverse;
    }

    .about__container--text {
        width: calc(100% / 3);

        @media screen and (max-width : 1280px) {
            width: inherit;   
        }
    }
}

h2 {
    color: white;
    font-size: 16px;
}

p {
    width: 378px;
    color: #9396A4;
    text-align: justify;
    line-height: 1.8;
}

.about__container--passions {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 550px;
    width: calc(100% / 1.5);

    @media screen and (max-width : 414px) {
        display: none;
    }


    .passion__container--first {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    

        img {
            width: 100%;
        }
    }

    .passion__container--first, .passion__container--second {
        width: 50%;

        @media screen and (max-width: 1280px) {
            width: 75%;

            &.passion__container--first {
                display: none;
            }
        }

    }

    img {
        position: relative;
        width: 100%;
        z-index: 3;
    }

    .first__container {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        right: 0%;

        @media screen and (max-width: 1280px){
            display: none;
        }


        &.anime, &.music {
            width: 100%;
            height: 165px;

        .passionimg__container {
            position: absolute;
        }

            img {
                width: 308px;
            }
        }

        &.anime {
            .passionimg__container {
                left: 0;
            }
            span {
                position: absolute;
                right: 0;
                color: white;
                font-family: 'spectral';
                font-size: 72px;
                z-index: 1000;
            }

        }
        &.music {
            .passionimg__container {
                right: 0;
            }

            span {
                position: absolute;
                left: 0;
                color: white;
                font-family: 'spectral';
                font-size: 72px;
                z-index: 1000;
            }

        }

    }
    .second__container {
        position: relative;
        padding: 0 5%;

        @media screen and (max-width: 1280px){
            padding: 0 15%;
            width: 100%;

            
        }

        p {
            position: absolute;
            top: 13%;
            width: 90%;
            z-index: 0;
            text-align: center;

            @media screen and (max-width: 1280px){
                top: 13%;
                width: 77%;
            }
        }
    }
}

.email__container--content {
    margin-top: 50px;
}

.email__container--content, .socials__container--content {
    h2 {
        color: white;
    }

    p, span {
        color: #9396A4;
    }

    h2, p {
        font-size: 16px;
    }

    .socials__container {
        display: flex;
        justify-content: space-between;
        width: 235px;
    }
}
`

const About = () => {
    return (
        <StyledAbout data-scroll-section>
            <div className="about__container--main">
                <div className="about__container--text">
                    <div data-scroll className="about__container--content">
                        <h2>About</h2>
                        <p>I’m a 20 years old interface designer and a third student at Hetic. I’m looking for a five-month internship starting early March 2020 in Japan but interested about anywhere in the world. I’m also passionate about video games, animes and I listen to music 24/7.</p>
                    </div>
                    <div data-scroll className="email__container--content">
                        <h2>Email</h2>
                        <p>Send me an email to talk!</p>
                    </div>
                    <div data-scroll className="socials__container--content">
                        <h2>Social media</h2>
                        <div className="socials__container">
                            <span>LinkedIn</span>
                            <span>Dribbble</span>
                            <span>Linkedin</span>
                        </div>
                    </div>
                </div>

                <div data-scroll className="about__container--passions">
                    <div data-scroll data-scroll-speed="-0.8" data-scroll-offset="-50%" className="passion__container--second">
                        <div data-scroll className="second__container">
                            <p data-scroll data-scroll-speed="-3" data-scroll-offset="-50%">Scroll to know more about me</p>
                            <div data-scroll className="passionimg__container">
                                <img src={gautierlooking} alt="" />
                            </div>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed="2" data-scroll-offset="-50%" className="passion__container--first">
                        <div data-scroll className="first__container anime">
                            <div data-scroll className="passionimg__container">
                                <img src={anime} alt="" />
                            </div>
                            <span>Anime</span>
                        </div>
                        <div data-scroll className="first__container music">
                            <span>Music</span>
                            <div data-scroll className="passionimg__container">
                                <img src={eden} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledAbout>
    )
}

export default About