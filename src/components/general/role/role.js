import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors } from '../../../assets/style/colors'

const StyledRole = styled.div`
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
}`


const Role = () => {
    return (
        <StyledRole colors={colors}>
            <div className="header__container--titles">
                <div className="titles__container--flex">
                    <h1>I worked with <span>BNP Paribas</span> and <span>Carte Bancaire</span> on finding new way to be closer to their users by creating a conversational bank. We did (we were a team of 4) surveys, interviews, personnas, empathy map, wireframes, UI, prototyping, usability testing and data analysis.</h1>
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
        </StyledRole>
    )
}

export default Role