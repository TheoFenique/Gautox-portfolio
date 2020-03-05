import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import LocomotiveScroll from 'locomotive-scroll'
import Wrapper from '../components/general/wrapper'
import Navbar from '../components/general/navbar'

import airbnb from '../assets/work/img/airbnb.png'
import { workList } from '../assets/work/json/worklist.js'

const StyledWork = styled.div`

.work__container--list {
    box-sizing: border-box;
    .list__container--single {
        position: relative;
        width: 100%;
        height: 300px;
        margin: 28vh 0;

        &.current {
            span {
                color: white;
            }
        }

        .single__container--main {
            position: absolute;
            width: fit-content;

            &:hover {
                .single__container--img {
                    position: absolute;
                    visibility: visible;
                    overflow: hidden;
                    top: -25%;
                    left: 65%;
                    width: 550px;
                    height: 343px;
                    z-index: -1;

                    img {
                        position: absolute;
                        opacity: 1;
                        left: 0%;
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            &.pos0 {
                left: 50%;
            }
            &.pos1 {
                left: 20%;
            }
            &.pos2 {
                left: 35%;
            }
            &.pos3 {
                left: 10%;
            }
            &.pos4 {
                left:50%;
            }
            &.pos5 {
                left: 30%;
            }

            .single__container--img {
                position: absolute;
                visibility: hidden;
                overflow: hidden;
                top: -25%;
                left: 55%;
                width: 580px;
                height: 362px;
                z-index: -1;
                transition: 1.5s cubic-bezier(0.75, 0.00, 0.25, 1) all;

                img {
                    position: absolute;
                    opacity: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    transition: 1s cubic-bezier(0.75, 0.00, 0.25, 1) all;
                }
            }

            span {
                color: white;
                font-size: 140px;
                font-family: 'Spectral';
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #fff;
                color: rgba(0,0,0,0);
                transition: all 0.1s;
            }
        }

    }
}

`

export const Work = () => {

    const [scrollPos, setScrollPos] = useState(0);
    const projectsContainer = useRef(null);
    const [current, setCurrent] = useState(0);

    const speed = [2, 3, 1, 5, 2]
    const height = window.innerHeight;

    // const handleScroll = (projects) => {
    //     let mapCurrent = 0;
    //     projects.map((v, i, a) => {
    //         var innerHeight = v.offsetHeight
    //         var rect = v.getBoundingClientRect();
    //         let ratio = (((rect.top + innerHeight / 2) / (height)) * 100 - 50) * 0.001;
    //         v.style.transform = `rotate(${-Math.cos((ratio + 0.5) * 3.14) * 56}deg) translateX(${(Math.cos(Math.abs(ratio * Math.PI)) * 195) - 180}vw)`
    //         if (ratio < 0.033 && ratio > -0.033) {
    //             mapCurrent = i
    //         }
    //     })
    //     setCurrent(mapCurrent)
    //     console.log("oui")
    // }

    // useEffect(() => {

    //     const projectsArray = ([...projectsContainer.current.querySelectorAll(".list__container--single")])
    //     handleScroll(projectsArray)
    //     window.addEventListener('scroll', () => handleScroll(projectsArray), true)

    //     return (
    //         window.removeEventListener('wheel', handleScroll)
    //     )
    // }, []);

    return (
        <Wrapper>
            <StyledWork>
                <div ref={projectsContainer} className="work__container--list">
                    {workList.map((v, i, a) =>
                        <div data-scroll-section key={i} className={"list__container--single" + " pos" + i}>
                            <div data-scroll data-scroll-offset="-50%" data-scroll-speed={speed[i]} data-scroll-direction="vertical" className={"single__container--main pos" + i}>
                                <div className="single__container--img">
                                    <img src={v.img} alt="" />
                                </div>
                                <span>{v.name}</span>
                            </div>
                        </div>
                    )}
                </div>
            </StyledWork>
        </Wrapper>
    )
}

export default Work