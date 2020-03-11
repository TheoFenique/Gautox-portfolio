import React from 'react'
import styled from 'styled-components'
import Mockup from '../../components/work/mockup'

import mainImage from '../../assets/airbnb/img/airbnb-big.jpg'
import mockupimg from '../../assets/airbnb/img/mockup.png'


const StyledAirbnb = styled.div`

.airbnb__container--header {
    margin-top: 116px;
    height: calc(100vh - 116px);
    .main-image__container--img {
        width: 100vw;
        height: 75vh;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        img {
            width: 120%;
            transform: translateY(-18%);
            margin: auto;
        }
    }

    .header__container--titles {
        position: absolute;
        top: 71%;
        right: 5%;

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
                margin-right: 25px;
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
    margin: 100px 0;
    width: 100%;
    height: fit-content;
    
    .first__container--content, .second__container--content, .third__container--content {
        h2 {
            width: 60%;
            max-width: 700px;
            text-align: justify;
            color: white;
            font-size: 28px;
        }
        p {
            width: 513px;
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

const Airbnb = () => {
    return (
        <StyledAirbnb>
            <div data-scroll-section className="airbnb__container--header">
                <div className="main-image__container--img">
                    <img src={mainImage} alt="" />
                </div>
                <div className="header__container--titles">
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
            <div data-scroll-section className="airbnb__container--first">
                <div data-scroll className="first__container--content">
                    <h2>How can we improve the AirBnb experience so people can think more about their weekend and less about the organization</h2>
                    <p>The onboarding was theoretically quite easy to publish something to npm. You create an account on npmjs.com, run npm login and then run npm publish. Your current project directory will get packaged up and put on the web.</p>
                </div>
                <div data-scroll className="first__container--images">
                    <Mockup direction={"0.7"} title="Home" img={mockupimg} />
                    <Mockup direction={"-0.7"} title="Explore" img={mockupimg} />
                </div>
            </div>

            <div data-scroll-section className="airbnb__container--second">
                <div data-scroll className="second__container--content">
                    <h2>How can we improve the AirBnb experience so people can think more about their weekend and less about the organization</h2>
                    <p>The onboarding was theoretically quite easy to publish something to npm. You create an account on npmjs.com, run npm login and then run npm publish. Your current project directory will get packaged up and put on the web.</p>
                </div>
                <div data-scroll className="second__container--images">
                    <Mockup direction={"0"} title="City selected" img={mockupimg} />
                    <Mockup direction={"0"} title="Select a package" img={mockupimg} />
                    <Mockup direction={"0"} title="Package selected" img={mockupimg} />
                    <Mockup direction={"0"} title="Package selected" img={mockupimg} />
                    <Mockup direction={"0"} title="Package selected" img={mockupimg} />
                </div>
            </div>

            <div data-scroll-section className="airbnb__container--third">
                <div data-scroll className="third__container--content">
                    <h2>How can we improve the AirBnb experience so people can think more about their weekend and less about the organization</h2>
                    <p>The onboarding was theoretically quite easy to publish something to npm. You create an account on npmjs.com, run npm login and then run npm publish. Your current project directory will get packaged up and put on the web.</p>
                </div>
                <div data-scroll className="third__container--images">
                    <Mockup direction={"0"} title="Home" img={mockupimg} />
                    <Mockup direction={"0"} title="Explore" img={mockupimg} />
                    <Mockup direction={"0"} title="Explore" img={mockupimg} />
                </div>
            </div>
        </StyledAirbnb>
    )
}

export default Airbnb