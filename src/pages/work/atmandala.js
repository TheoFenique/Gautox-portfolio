import React from 'react'
import styled from 'styled-components'

import mainImage from '../../assets/mandala/mandala.jpg'

import Content from '../../components/work/content'
import MainImg from '../../components/general/mainimg/Mainimg'
import NextProject from '../../components/work/nextproject'
import { colors } from '../../assets/style/colors'


const StyledATMandala = styled.div`
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
`

const ATMandala = () => {
    return (
        <StyledATMandala colors={colors}>
            <div data-scroll-section className="airbnb__container--header">
                <MainImg img={mainImage} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>The goal of this school project was to make a mandala using the theme of our choice. I choosed “Adventure Time” since im a fan of the show! This project was made using Illustrator.</h1>
                        <div className="titles__container--undertitles">
                            <div className="undertitles__container--roles">
                                <span>Role</span>
                                <small>Illustrator</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Date</span>
                                <small>January 2019</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Type</span>
                                <small>School Project</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Content title="Why Adventure Time ?">
                I love this show ! And I felt like it was a good idea since the universe of this show is really colorfull with a alot of different characters such as Finn, Jake or Flame Princess !
            </Content>
            <NextProject link="/work/karmium" />
        </StyledATMandala>
    )
}

export default ATMandala