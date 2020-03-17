import React from 'react'
import styled from 'styled-components'
import Mockup from '../../components/work/mockup'

import mainImage from '../../assets/airbnb/img/airbnb-big.jpg'
import mockupimg1 from '../../assets/airbnb/img/mock-up_1.png'
import mockupimg2 from '../../assets/airbnb/img/mock-up_2.png'
import mockupimg3 from '../../assets/airbnb/img/mock-up_3.png'
import mockupimg4 from '../../assets/airbnb/img/mock-up_4.png'
import mockupimg5 from '../../assets/airbnb/img/mock-up_5.png'
import mockupimg6 from '../../assets/airbnb/img/mock-up_6.png'
import mockupimg7 from '../../assets/airbnb/img/mock-up_7.png'
import mockupimg8 from '../../assets/airbnb/img/mock-up_8.png'
import mockupimg9 from '../../assets/airbnb/img/mock-up_9.png'

import Content from '../../components/work/content'
import MainImg from '../../components/general/mainimg/Mainimg'
import NextProject from '../../components/work/nextproject'


const StyledAirbnb = styled.div`

.airbnb__container--header {
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

.airbnb__container--first, .airbnb__container--second, .airbnb__container--third {
    box-sizing: border-box;
    padding: 0 5%;
    margin-top: 50px;
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

    .second__container--images {
        width: 800px;
        margin: auto;
    }
}
`

const Airbnb = () => {
    return (
        <StyledAirbnb>
            <div data-scroll-section className="airbnb__container--header">
                <MainImg img={mainImage} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>Airbnb</h1>
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
                                <small>School project</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-scroll-section className="airbnb__container--first">
                <Content title="Introduction">
                    It was a school project that I did with a friend. We needed to create an AirBnb app which allows people to book a weekend abroad quickly, by directly proposing activities, flights etc...
                </Content>
                <Content title="Goal of the project">
                    The onboarding was theoretically quite easy to publish something to npm. You create an account on npmjs.com, run npm login and then run npm publish. Your current project directory will get packaged up and put on the web.
                </Content>
                <div data-scroll className="first__container--images">
                    <Mockup direction={"-0.4"} title="Home" img={mockupimg1} />
                    <Mockup direction={"0.4"} title="Explore" img={mockupimg2} />
                </div>
            </div>

            <div data-scroll-section className="airbnb__container--second">
                <Content title="Process">
                    Since I wanted to do a really fast reservation flow, once you choosed a package, all the choices the user have to do are in one single page and you only need to scroll to check everything. Less click lead to a better and faster experience.
                </Content>
                <div data-scroll data-scroll-offset="-100%" className="second__container--images">
                    <Mockup horizontal direction={"-0.1"} data-scroll-direction="vertical" title="City selected" img={mockupimg3} />
                    <Mockup horizontal direction={"0.1"} data-scroll-direction="vertical" title="Select a package" img={mockupimg4} />
                    <Mockup horizontal direction={"-0.1"} data-scroll-direction="vertical" title="Package selected top" img={mockupimg5} />
                    <Mockup horizontal direction={"0.1"} data-scroll-direction="vertical" title="Package selected bottom" img={mockupimg6} />
                </div>
            </div>

            <div data-scroll-section className="airbnb__container--third">
                <Content title="Process">
                    Then you need pay and you are all set.
                </Content>
                <div data-scroll className="third__container--images">
                    <Mockup direction={"-0.3"} title="Package selected" img={mockupimg7} />
                    <Mockup direction={"-0.3"} title="Home" img={mockupimg8} />
                    <Mockup direction={"-0.3"} title="Explore" img={mockupimg9} />
                </div>
            </div>
            <NextProject link="/work/imcas" />
        </StyledAirbnb>
    )
}

export default Airbnb