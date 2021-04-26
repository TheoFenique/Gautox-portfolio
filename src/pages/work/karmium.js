import React from 'react'
import styled from 'styled-components'

import mainImage from '../../assets/karmium/karmium_full.jpg'

import Content from '../../components/work/content'
import MainImg from '../../components/general/mainimg/Mainimg'
import NextProject from '../../components/work/nextproject'
import { colors } from '../../assets/style/colors'
import vidOnboard from "../../assets/karmium/onboarding.mp4"
import home from "../../assets/karmium/home.mp4"
import karmium from "../../assets/karmium/karmium.mp4"
import noname1 from "../../assets/karmium/noname1.mp4"
import noname2 from "../../assets/karmium/noname2.mp4"
import amazon from "../../assets/karmium/amazon.png"

const StyledGrenade = styled.div`
overflow: hidden;

.airbnb__container--header {
}

.airbnb__container--first, .airbnb__container--second, .airbnb__container--third {
    box-sizing: border-box;
    padding: 0 5%;
    width: 100%;
    height: fit-content;

    @media screen and (max-width: 1000px) {
        padding: 0 2%;
    }
    
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

    .second__container--images {
        width: 800px;
        max-width: 100%;
        margin: auto;
    }
}
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

.img-container-small, .img-container-big {
    position: relative;
    width: 55%;
    margin: auto;

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
}

.last {
    margin-bottom: 80px;
}

h4 {
    text-align: center;
}

h4 a {
    font-family: 'nueue-bold';
    font-size: 24px;
    color: ${props => props.colors.contentDarker};
    text-align: center;
    text-decoration: underline;
}

.video {
    display: flex;
    width: 70%;
    margin: 80px auto;
    flex-wrap: wrap;

    .video-content {
        box-sizing: border-box;
        width: 70%;
        padding-left: 3%;
        @media screen and (max-width : 730px) {
            width: 100%;
        }
    }

    h3 {
        color: ${props => props.colors.contentDarker};
        font-size: 32px;
        line-height: 1.5;
        font-family: 'nueue-bold'
    }

    video {
        width: 30%;
        min-width: 250px;
        margin: auto;
    }
}
.video-reversed {
    display: flex;
    width: 70%;
    margin: 80px auto;
    flex-direction: row-reverse;
    flex-wrap: wrap;

    .video-content {
        box-sizing: border-box;
        width: 70%;
        padding-right: 3%;
        @media screen and (max-width : 730px) {
            width: 100%;
        }
    }

    h3 {
        color: ${props => props.colors.contentDarker};
        font-size: 32px;
        line-height: 1.5;
        font-family: 'nueue-bold'
    }

    video {
        width: 30%;
        min-width: 250px;
        margin: auto;
    }
}

h5 {
    text-align: center;
    font-size: 32px;
    color: ${props => props.colors.contentDarker};
    font-family: 'nueue-bold'
}
`

const Grenade = () => {
    return (
        <StyledGrenade colors={colors}>
            <div className="airbnb__container--header">
                <MainImg img={mainImage} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>We had a week to design a product that help people and make the world a better place. With <a target="_blank" href="https://theojullien.fr/"><span>Théo Julien</span></a>, we created an app for a cryptocurrency that take values with social actions ! My work here was UX/UI and prototyping.</h1>
                        <div className="titles__container--undertitles">
                            <div className="undertitles__container--roles">
                                <span>Role</span>
                                <small>UX/UI Designer</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Date</span>
                                <small>May 2021</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Type</span>
                                <small>School Project</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Content title="Problem">
                The projet goal was to find a way to improve people's happiness and make them more supportive of each other. In others words : making the world a better place. But how can we bring this sense of unity in a very individualistic society ?
            </Content>
            <Content title="What are the challenges">
                We first identified a stagnation of solidarity due to several factors : 
                <ul>
                    <li>People wanted financial transparency about where their money where going.</li>
                    <li>People wanted social recognition when helping for a association</li>
                </ul>
            </Content>
            <Content title="Solution">
                We designed Karmium, a mobile app that provide to users some social actions to do in order to make the Karmium (fake) cryptocurrency gain value. It also enables users to quickly see the price chart of Karmium, the impact they made on this value and how much Karmium they have.
                <p>So the cores features of the app where : </p>
                <ul>
                    <li>See your contribution, your actions and the rewards you receive</li>
                    <li>Inform about charity events in the vicinity </li>
                    <li>Buy, sell and trade cryptocurrency</li>
                </ul>
            </Content>
            <h4><a target="_blank" href="https://www.figma.com/proto/dfYJZVBhDNfowtnYUAHlIe/Karmium?node-id=1%3A13544&viewport=1887%2C502%2C0.16447992622852325&scaling=scale-down&page-id=0%3A1">Jump to the prototype</a></h4>
            <div className="video">
                <video src={vidOnboard} autoplay="true" muted="true" loop></video>
                <div className="video-content">
                    <h3>A weird & new concept needs explanation</h3>
                    <p>Since the concept was kind off new, we really wanted to explain how the cryptocurrency and the app work. We made a fast 3 steps onboarding to explain everything to new users.</p>
                </div>
            </div>
            <div className="video-reversed">
                <video src={home} autoplay="true" muted="true" loop></video>
                <div className="video-content">
                    <h3>Everything you need to know </h3>
                    <p>Designing the homepage was quite difficult : it needed to quickly highlights all what the user wanted to know once he open the app. So a quick recap of the Karmium value, his impact on it, and some news that can influence the value of the Karmium.</p>
                </div>
            </div>
            <div className="video">
                <video src={karmium} autoplay="true" muted="true" loop></video>
                <div className="video-content">
                    <h3>Check the Karmium market value</h3>
                    <p>The Karmium section help you see what is the value of the Karmium and give a lot of infos and stats about the market.</p>
                </div>
            </div>
            <div className="video-reversed">
                <video src={noname1} autoplay="true" muted="true" loop></video>
                <div className="video-content">
                    <h3>See how much you impacted the Karmium value thanks to  your actions !</h3>
                    <p>This section was designed so the user can really see the impact he made on the cryptocurrency. It serve as a motivation to do more and that’s why we gamified it by adding monthly objectives to make in order to have rewards ! It also propose few social actions to make. It was kinda tricky because we needed to find actions that can be counted by the app. It’s a fiction project, so we supposed that for example in the partners blood donation center, they can approve the fact that you made a donation by scanning a QR code.</p>
                </div>
            </div>
            <h5>Buying a French Product</h5>
            <div className="img-container-small">
                <img src={amazon}/>
            </div>
            <div className="video">
                <video src={noname2} autoplay="true" muted="true" loop></video>
                <div className="video-content">
                    <p>When buying a french product on one of our patners website, you can enter your Karmium Code to validate the action. Then once you open the app you have a notification that inform you that your action was validated !</p>
                </div>
            </div>
            <Content title="Reflection">
            It was a really fun but intensive project, since we only had a week to do everything. 
            If i had more time, i would have done a light theme to suit better the “social” aspect of the project. And more importantly : improve the UX by doing more users testing and more research. Thanks to my boi Théo Julien for doing this project with me.<br/><br/>

            Thanks for reading.
            </Content>
            <NextProject link="/work/imcas" />
        </StyledGrenade>
    )
}

export default Grenade