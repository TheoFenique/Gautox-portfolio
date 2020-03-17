import React from 'react'
import styled from 'styled-components'
import Mockup from '../../components/work/mockup'
import MainImg from '../../components/general/mainimg/Mainimg'
import Content from '../../components/work/content'
import NextProject from '../../components/work/nextproject'

import mainImage from '../../assets/work/img/imcas.jpg'
import mockupimg from '../../assets/airbnb/img/mockup.png'
import crowd from '../../assets/imcas/crowd.png'
import feedback from '../../assets/imcas/feedback.png'
import imca from '../../assets/imcas/imca.png'


const StyledImcas = styled.div`
overflow: hidden;
.imcas__container--header {
    margin-top: 116px;

    .header__container--titles {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 5%;

        .titles__container--flex {
            position: relative;
            margin-top: -10%;
            z-index: 10;

            @media screen and (max-width : 1000px) {
                margin-top: -18%;
            }

            p, a{
                color: white;
                font-family: 'spectral';
                font-size: 28px;
                margin-top: 50px; 
                transition: 0.4s all;
                text-decoration: none;
                cursor: pointer;

                &:hover {
                    transform: translateX(1.5%);
                }
            }
        }

        h1 {
            color: white;
            font-family: 'Spectral';
            font-size: 170px;
            margin: 0;

            @media screen and (max-width : 1000px) {
                font-size: 82px;
            }
        }

        .titles__container--undertitles {
            display: flex;
            width: 300px;
            justify-content: space-between;

            .undertitles__container--roles {
                display: flex;
                flex-direction: column;
                span, small {
                    display: block;
                    color: white;
                }

                small {
                    color: #9396A4;
                    margin-top: 10px;
                }
            }
        }

    }
}

.imcas__container--first,.imcas__container--second {
    .first__container--images, .second__container--images {
        position: relative;
        padding-top: 50px; 
        width: 1000px;
        margin: auto;
        
        @media screen and (max-width: 1000px){
            width: 600px;
            height: 360px;
        }
        @media screen and (max-width: 600px){
            width: 360px;
            height: 129px;
        }

        img {
            width: 100%;
        }
    }
}

.imcas__container--first, .imcas__container--second, .imcas__container--third {
    box-sizing: border-box;
    padding: 0 5%;
    margin: 100px 0;
    width: 100%;
    height: fit-content;
    
    .first__container--content, .second__container--content, .third__container--content {
        box-sizing: border-box;
        display: flex;
        align-items: baseline;
        justify-content: center;
        padding: 0 20%;

        h2 {
            box-sizing: border-box;
            padding: 0 ;
            width: 35%;
            max-width: 237px;
            text-align: justify;
            color: white;
            font-size: 16px;
        }
        p {
            box-sizing: border-box;
            padding: 5%;
            width: 65%;
            max-width: 534px;
            color: #9396A4;
            text-align: justify;
        }
    }

    .first__container--images, .second__container--images, .third__container--images{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}
`

const Imcas = () => {
    return (
        <StyledImcas>
            <div data-scroll-section className="imcas__container--header">
                <MainImg img={mainImage} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>Imcas</h1>
                        <div className="titles__container--undertitles">
                            <div className="undertitles__container--roles">
                                <span>Role</span>
                                <small>Designer</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Date</span>
                                <small>June 2019</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Type</span>
                                <small>Internship</small>
                            </div>
                        </div>
                        <p><a target="_blank" href="https://www.imcas.com/en">Launch</a></p>
                    </div>
                </div>
            </div>
            <div data-scroll-section className="imcas__container--first">
                <Content title="Introduction">
                    During 3 months I worked as a interface designer for IMCAS. A company that organise congress about surgery all around the world. More than 10 000 practitioners went to the last congress in January 2020 in Paris.
                </Content>
                <Content title="Goal of the project">
                    I did alot of differents things during my internship, I mostly redesigned the homepage in order for it to achieve the following goals :<br /> - Make the registration to a congress easier<br /> - Increase traffic to the feedback page.
                </Content>
                <div data-scroll data-scroll-offset="-150%, 150%" className="first__container--images">
                    <img data-scroll data-scroll-speed={-0.4} src={crowd} />
                </div>
            </div>

            <div data-scroll-section className="imcas__container--second">
                <Content title="Process">
                    To increase the traffic on the feedback page, I put a feedback section with a CTA button in the homepage that link to the feedback page. And I redesigned the homepage UI to make it looks more modern.
                </Content>
                <div data-scroll className="second__container--images">
                    <div data-scroll data-scroll-offset="-150%, 150%" className="first__container--images">
                        <img data-scroll data-scroll-speed={-0.4} src={feedback} />
                    </div>
                </div>
            </div>

            <div data-scroll-section className="imcas__container--third">
                <Content title="And more...">
                    I also created 2 landing pages (I can’t show them here since they are not out yet) redesigned others pages of the site, redesigned the mobile menu to add hierarchy, simplicity and intuitivty.
                </Content>
                <div data-scroll className="third__container--images">
                    <Mockup direction={"-0.4"} title="Adding hierarchy, intuitivity thanks to the indentation." img={imca} />
                </div>
            </div>
            <NextProject link="/work/airbnb" />
        </StyledImcas>
    )
}

export default Imcas