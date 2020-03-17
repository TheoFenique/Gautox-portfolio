import React from 'react'
import styled from 'styled-components'

import Mockup from '../../components/work/mockup'
import Content from '../../components/work/content'
import MainImg from '../../components/general/mainimg/Mainimg'
import NextProject from '../../components/work/nextproject'

import mainImage from '../../assets/academy/header.jpg'
import stats from '../../assets/academy/ima.png'
import landing from '../../assets/academy/landing.png'
import mockupimg from '../../assets/airbnb/img/mockup.png'


const StyledAcademy = styled.div`

.academy__container--header {
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
        }

        .titles__container--undertitles {
            display: flex;

            .undertitles__container--roles {
                display: flex;
                flex-direction: column;
                margin-right: 50px;
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

.first__container--images {
    position: relative;
    width: 1000px;
    height: 600px;
    margin: 100px auto;

    img {
        width: 100%;
    }
}

.academy__container--first, .academy__container--second, .academy__container--third {
    box-sizing: border-box;
    padding: 0 5%;
    margin-top: 0px;
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

const Academy = () => {
    return (
        <StyledAcademy>
            <div data-scroll-section className="academy__container--header">
                <MainImg img={mainImage} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>Academy</h1>
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
                        <p><a target="_blank" href="https://www.imcas.com/en/academy/about">Launch</a></p>
                    </div>
                </div>
            </div>
            <div data-scroll-section className="academy__container--first">
                <Content title="Introduction">
                    During 3 months I worked as a interface designer for IMCAS. A company that organise congress about surgery all around the world. This time I was working on their e-learning platform : IMCAS Academy. IMCAS Academy is a platform where surgeons can watch online surgical courses, ask questions on a forum to fellow surgeons etc...
                </Content>
                <Content title="Goal of the project">
                    Making the IMCAS Academy statistical report that show all the datas from the Imcas Academy users. I needed to think about a smart way to organize all the datas, and also a way to make it look appealing and not boring to scroll in.
                </Content>
                <div data-scroll data-scroll-offset="-150%, 150%" l className="first__container--images">
                    <img data-scroll data-scroll-speed={-0.4} src={stats} />
                </div>
            </div>

            <div data-scroll-section className="academy__container--second">
                <Content title="Process">
                    First, I needed to check all the datas I needed to display and organize it in category. It was already kinda organized in the data-base so it was quite fast. Then I talked to my team about which datas we wanna highlights more and the overall hierarchy of it regarding what users wanna see the most. Then it’s time to wireframes and design!
                </Content>
            </div>

            <div data-scroll-section className="academy__container--third">
                <Content title="And more">
                    While working on the e-learning platform of IMCAS, I also created a landing page which has not yet been released but will be put online for specific marketing purposes. This is how the “Above the fold” will look, since for confidentiality reason, I can’t show the entire layout.
                </Content>
                <div data-scroll className="third__container--images">
                    <div ddata-scroll data-scroll-offset="-150%, 150%" className="first__container--images">
                        <img data-scroll data-scroll-speed={-0.4} src={landing} />
                    </div>
                </div>
            </div>
            <NextProject link="/work/imcas" />
        </StyledAcademy>
    )
}

export default Academy