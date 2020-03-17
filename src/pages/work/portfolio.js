import React from 'react'
import styled from 'styled-components'
import Mockup from '../../components/work/mockup'
import MainImg from '../../components/general/mainimg/Mainimg'
import Content from '../../components/work/content'
import NextProject from '../../components/work/nextproject'

import homepage from '../../assets/portfolio/homepage.png'
import work from '../../assets/portfolio/work.png'
import mwa from '../../assets/portfolio/mwa.jpg'
import moi from '../../assets/portfolio/moiii.jpg'

import header from '../../assets/portfolio/header.jpg'


const StyledPortfolio = styled.div`

.portfolio__container--header {
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

.portfolio__container--first,.portfolio__container--second {
    .first__container--images, .second__container--images {
        position: relative;
        padding-top: 50px; 
        height: 600px;
        width: 1000px;
        margin: auto;

        img {
            width: 100%;
        }
    }
}

.portfolio__container--first, .portfolio__container--second, .portfolio__container--third {
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

.portrait__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 675px;
    margin: 0px auto 100px auto;
    img {
        width: 45%;

    }
}
`

const Portfolio = () => {
    return (
        <StyledPortfolio>
            <div data-scroll-section className="portfolio__container--header">
                <MainImg img={header} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>Portfolio</h1>
                        <div className="titles__container--undertitles">
                            <div className="undertitles__container--roles">
                                <span>Role</span>
                                <small>Designer</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Date</span>
                                <small>March 2020</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Type</span>
                                <small>Personnal website</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-scroll-section className="portfolio__container--first">
                <Content title="Introduction">
                    I wanted to make a really personnal portfolio that really suit me and that provide the best users experience for you, users. Because you are all that matters.
                </Content>
                <Content title="Goal of the project">
                    Making a portfolio with my own style and who shows my projects in the best possible way, caring about the entire process of every project. From the User experience to the User Interface. From the goals given to how I achieve theses goals by design. Too many portfolio’s projects case study are just images without explanation. I don’t wanted to do that.
                </Content>
                <div data-scroll data-scroll-offset="-150%, 150%" className="first__container--images">
                    <img data-scroll data-scroll-speed={-0.4} src={homepage} />
                </div>
            </div>

            <div data-scroll-section className="portfolio__container--second">
                <Content title="Process">
                    Theo Fenique, a good friend of mine wanted to code my portfolio, I know he’s a good front developer so we started working together on the project. I wanted to make the best users experience possible, without making too many animations. Also I wanted to make as less pages as possible to don’t lost the users on my site. That’s why from the homepage you can access to every page possible without even using the header menu.
                </Content>
                <div data-scroll className="second__container--images">
                    <div data-scroll data-scroll-offset="-150%, 150%" className="first__container--images">
                        <img data-scroll data-scroll-speed={-0.4} src={work} />
                    </div>
                </div>
            </div>

            <div data-scroll-section className="portfolio__container--third">
                <Content title="And more...">
                    Outside of the design/code experience, we knew that illustrations on a website are important, and especially since it’s my portfolio, I needed to take pictures of myself, I didn’t had any so we took somes outdoors with my friend Théo. It was really fun.
                </Content>
            </div>
            <div data-scroll-section data-scroll-offset="-100%, -100%" className="portrait__container">
                <img data-scroll-speed={0.4} data-scroll-offset="-100%, -100%" data-scroll src={mwa} alt="" />
                <img data-scroll-speed={-0.4} data-scroll-offset="-100%, -100%" data-scroll src={moi} alt="" />
            </div>
            <NextProject link="/work/academy" />
        </StyledPortfolio>
    )
}

export default Portfolio