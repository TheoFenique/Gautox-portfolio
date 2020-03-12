import React from 'react'
import styled from 'styled-components'
import banana from '../../../assets/work/img/sald.png'

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
`

const About = () => {
    return (
        <StyledAbout data-scroll-section>
            <div data-scroll className="about__container--content">
                <h2>About</h2>
                <p>I’m a 20 years old interface designer and a third student at Hetic. I’m looking for a five-month internship starting early March 2020 in Japan but interested about anywhere in the world. I’m also passionate about video games, animes and I listen to music 24/7.</p>
            </div>
            <div data-scroll className="about__container--passions">
                <div data-scroll data-scroll-speed="-1" data-scroll-offset="-50%" className="passion__container--first">
                    <div data-scroll className="first__container">
                        <div data-scroll className="passionimg__container">
                            <img src={banana} alt="" />
                        </div>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="-1" data-scroll-offset="-50%" className="passion__container--first">
                    <div data-scroll className="first__container">
                        <div data-scroll className="passionimg__container">
                            <img src={banana} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </StyledAbout>
    )
}

export default About