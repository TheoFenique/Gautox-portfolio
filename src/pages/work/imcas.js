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
import { colors } from '../../assets/style/colors'


const StyledImcas = styled.div`
overflow: hidden;
.imcas__container--header {

    .header__container--titles {
    background: ${props=>props.colors.contentDarker};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 56px 5%;

    .titles__container--flex {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        z-index: 10;
        @media screen and (max-width : 1000px) {
            margin-top: -18%;
        }
    }

    h1 {
        color: white;
        font-size: 32px;
        margin: auto 0;
        width: 60%;
        color: ${props=>props.colors.content};
        font-family: 'nueue-bold';
        @media screen and (max-width : 1000px) {
            font-size: 82px;
        }

        span {
            color: white;
            font-family: 'nueue-bold';
            font-size: 32px;
        }

    }

    .titles__container--undertitles {
        width: 60%;
        display: flex;
        margin-top: 40px;

        .undertitles__container--roles {
            display: flex;
            flex-direction: column;
            margin-right: 80px;
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
        <StyledImcas colors={colors}>
            <div data-scroll-section className="imcas__container--header">
                <MainImg img={mainImage} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>During my internship at IMCAS, I worked on the digital team as the sole UX/UI designer and helped developers to improve the UX of the website.</h1>
                        <div className="titles__container--undertitles">
                            <div className="undertitles__container--roles">
                                <span>Role</span>
                                <small>Designer</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Date</span>
                                <small>June - September 2019</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Type</span>
                                <small>Internship work</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-scroll-section className="imcas__container--first">
                <Content title="Presentation">
                    IMCAS is a company that organise congress in dermatology, plastic surgery and aesthetic science all around the world. In 2016 IMCAS launched IMCAS Academy, an international platform in medical aesthetics with videos to learn and network with experts.
                </Content>
                <Content title="Improving buying flow">
                    On the main website, when you wanna attend a congress, you need to buy a ticket. We had alot of feedback saying that users felt lost buying a ticket. We couldn’t change the entire flow so i suggested to work on the progress bar.
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