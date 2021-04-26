import React from 'react'
import Role from '../../components/general/role'
import styled from 'styled-components'

import mainImage from '../../assets/bnp/bnp_full.png'
import bnpImage from '../../assets/miniature/BNP.jpg'


import Content from '../../components/work/content'
import MainImg from '../../components/general/mainimg/Mainimg'
import NextProject from '../../components/work/nextproject'
import { colors } from '../../assets/style/colors'


const StyledAirbnb = styled.div`
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
    flex-wrap: wrap;

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
`

const Airbnb = () => {
    return (
        <StyledAirbnb colors={colors}>
            <div  className="airbnb__container--header">
                <MainImg img={mainImage} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>I worked with <span>BNP Paribas</span> and <span>Carte Bancaire</span> on finding new way to be closer to their users by creating a conversational bank. We did (we were a team of 4) surveys, interviews, personnas, empathy map, wireframes, UI, prototyping, usability testing and data analysis.</h1>
                        <div className="titles__container--undertitles">
                            <div className="undertitles__container--roles">
                                <span>Role</span>
                                <small>UX/UI Designer</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Date</span>
                                <small>November 2020 - April 2021</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Type</span>
                                <small>Research Work</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Content title="Project under NDA">
            This project is currently under an NDA. Please feel free to contact me for further details surrounding what I worked on with BNP and CB !
            </Content>
            <NextProject link="/work/karmium" />
        </StyledAirbnb>
    )
}

export default Airbnb