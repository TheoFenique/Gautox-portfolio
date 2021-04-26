import React from 'react'
import styled from 'styled-components'
import MainImg from '../../components/general/mainimg/Mainimg'
import Content from '../../components/work/content'
import NextProject from '../../components/work/nextproject'

import mainImage from '../../assets/imcas/imcas_full.png'
import badge from '../../assets/imcas/badge.png'
import oldProgress from '../../assets/imcas/old-progress-bar.png'
import naiProgress from '../../assets/imcas/nai-progress-bar.png'
import fullPage from '../../assets/imcas/fullpage.png'
import opinion from '../../assets/imcas/opinion.png'
import before from '../../assets/imcas/before.png'
import after from '../../assets/imcas/after.png'

import { colors } from '../../assets/style/colors'
import BeforeAfter from '../../components/work/beforeAfter'


const StyledImcas = styled.div`
overflow: hidden;
.content__container--header {

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
    }

    h1 {
        color: white;
        font-size: 32px;
        margin: auto 0;
        width: 60%;
        color: ${props=>props.colors.content};
        font-family: 'nueue-bold';

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
        flex-wrap: wrap;


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

.img-container-small, .img-container-big {
    position: relative;
    width: 55%;
    margin: auto;
    @media screen and (max-width : 730px) {
        width: 80%;
    }
    
    img {
        width: 100%;
        box-shadow: 0px 3px 8px rgba(0,3,8, 0.1);
        border-radius: 10px;
    }
}

.comment {
    img {
        box-sizing: border-box;
        padding: 5%;
    }
}

.img-container-big, .img-container-small{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.img-container-big {
    width: 70%;
    @media screen and (max-width : 730px) {
        width: 90%;
    }
}

.content__container, .content__container, .content__container--third {
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
}

`

const Imcas = () => {
    return (
        <StyledImcas colors={colors}>
            <div className="content__container--header">
                <MainImg img={mainImage} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>During my internship at IMCAS, I worked on the digital team as the sole UX/UI designer and helped developers to improve the UX of their products.</h1>
                        <div className="titles__container--undertitles">
                            <div className="undertitles__container--roles">
                                <span>Role</span>
                                <small>UX/UI Designer</small>
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
            <div className="content__container">
                <Content title="Presentation">
                    IMCAS is a company that organise congress in dermatology, plastic surgery and aesthetic science all around the world. In 2016 IMCAS launched IMCAS Academy, an international platform in medical aesthetics with videos to learn and network with experts.
                </Content>
                <Content title="Improving buying flow">
                    On the main website, when you wanna attend a congress, you need to buy a ticket. We had alot of feedback saying that users felt lost buying a ticket. We couldn’t change the entire flow so i suggested to work on the progress bar.
                </Content>
                <div className="img-container-big">
                    <img src={badge} />
                </div>
            </div>
            <div className="content__container">
                <Content>
                    <b>The old progress bar looked like this:</b>
                </Content>
                <div className="img-container-small" >
                    <img src={oldProgress} />
                </div>
                <Content>
                    In order to improve it, I suggested to display all the steps, even tho the users is not yet on them. It make it easier for the user to see where he’s going next. Then I added color and 3 differents state to make things even more clear :
                </Content>
                <div className="img-container-small" >
                    <img src={naiProgress} />
                </div>
            </div>
            <div className="content__container">
                <Content title="Increase the trafic on the feedback page">
                    IMCAS had a really valuable feedback page that they wanted to bring to the spotlight. But trafic on this page was quite low. After some research I suggested adding a feedback section on the homepage as a “Social proof” that will redirect to the Feedback page. It ended up improving the trafic on the feedback page by alot !
                </Content>
                <div className="img-container-small comment" >
                    <img src={opinion} />
                </div>
                <Content title="Creating a landing Page">
                    IMCAS wanted a landing page to promote IMCAS Academy, the e-learning platform of IMCAS. The page needed to showcase multiples features, as well as the IOS/Android App.
                </Content>
                <div className="img-container-big">
                    <img src={fullPage} />
                </div>
                <Content title="Redesigning the responsive menu">
                    A lot of IMCAS website user’s are on mobile so I had the mission to improve the responsive menu that was lacking clarity and consistency.
                </Content>
                <BeforeAfter
                    beforeImg={before}
                    beforeContent="It was kinda lacking consistency and the color were all over the places, also it was scrollable which was not a good experience."
                    afterImg={after}
                    afterContent="I cleared the color problems, used indentation to make opening menu so the menu is more organised and not scrollable anymore."
                />
                <Content title="And others missions">
                    I also redesigned pages of the Academy Website, worked on the IMCAS App and others stuff ! I wanted to showcase differents types of works in this case study that’s why i selected to show thoses projets.
                </Content>
                <Content title="Reflection">
                    Overall it was a nice experience working on products that thousands of people use, knowing how the datas influence what I will work on was also interesting ! I think I did well during this internship but there are many things I wish I could have done differently, but hey it’s over now, time to move on!<br/><br/>
                    Thanks for reading.
                </Content>
            </div>
            <NextProject link="/work/grenadinencie" />
        </StyledImcas>
    )
}

export default Imcas