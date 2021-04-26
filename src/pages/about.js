import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import gautierlooking from '../assets/index/gautierislookingaway.jpg'
import cv from '../assets/cv.pdf'
import { colors } from '../assets/style/colors'


const StyledAbout = styled.div`
.about__container--main {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100;
    padding: 5%;

    .about__container--text {
        position: relative;
        width: 40%;
    }

    .container-img {
        display: flex;
        justify-content: center;
        width: 40%;

        img {
            margin: auto;
            width: 80%;
            z-index: 10;
        }
    }
    h2 {
        color: ${props=>props.colors.contentDarker};
        font-size: 32px;
        font-family: 'nueue-bold';
        margin: 0;
    }
    
    .socials__container {
        width: 80%;
        display: flex;
        justify-content: space-between;

        a:hover {
            color: #DD4247;
            transition: 0.3s all;
        }
    }
}

.bigassfont {
    width: 100%;
    height: 1700px;
    overflow: hidden;
    margin-top: -300px;
}

h6 {
    position: relative;
    width: 3000px;
    -webkit-text-stroke: 1px ${props=>props.colors.content};
    -webkit-text-fill-color: white;
    font-size: 120px;
    margin: 0;
    transition: 0.4s all;
}

`

const About = () => {

    const [scroll, setScroll] = useState(1000 - (3000 * (window.scrollY / window.innerHeight)));

    useEffect(() => {

        const onScroll = () => {
            setScroll(1000 - (2000 * (window.scrollY / window.innerHeight)))
        }

        window.addEventListener("scroll", () => {
            onScroll()
        });
    
        return () => window.removeEventListener("scroll", onScroll());
      }, []);

      console.log({scroll})
    return (
        <StyledAbout colors={colors}>
            <div className="about__container--main">
                <div className="about__container--text">
                    <div  className="about__container--content">
                        <h2>About</h2>
                        <p>I’m a 21 years old interface designer and a fourth year student at Hetic. I’m looking for a six-month internship from June 2021 to January 2022 anywhere in the world. I’m also passionate about video games, animes and I listen to music 24/7. Oh and i’m currently writing a design article on Medium stay tuned ! </p>
                    </div>
                    <div  className="email__container--content">
                        <h2>Email</h2>
                        <p><a href="mailto:gautier.burias92@gmail.com">Gautier.burias92@gmail.com</a></p>
                    </div>
                    <div  className="socials__container--content">
                        <h2>Social media</h2>
                        <div className="socials__container">
                            <a target="_blank" href={cv}>Resume</a>
                            <a target="_blank" href="https://www.linkedin.com/in/gautier-burias-a08a41164/">Linkedin</a>
                            <a target="_blank" href="https://dribbble.com/GautierBurias">Dribbble</a>
                            <a target="_blank" href="https://medium.com/@gautierburias">Medium</a>
                        </div>
                    </div>
                </div>
                <div className="container-img">
                    <img src={gautierlooking} alt=""/> 
                </div>
            </div>
            <div className="bigassfont">
                <h6 style={{transform: "rotate(-24deg) translate("+scroll+"px )"}}>create things . skateboarding at 3am . listen to EDEN songs . play with Interactive Components in Figma . make memes . play minecraft & league . eat good good food . watch anime . alot of others stuff... oh hello !</h6>
            </div>
        </StyledAbout>
    )
}

export default About