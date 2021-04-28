import React from 'react'
import styled from 'styled-components'

import mainImage from '../../assets/grenadencie/grenade_full.jpg'

import Content from '../../components/work/content'
import MainImg from '../../components/general/mainimg/Mainimg'
import NextProject from '../../components/work/nextproject'
import { colors } from '../../assets/style/colors'
import gotox92 from '../../assets/grenadencie/gotox92.png'


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
    height: fit-content;    
}

.img-container-big {
    width: 70%;
}

.last {
    margin-bottom: 80px;
}

h3 {
    font-family: 'nueue-bold';
    font-size: 18px;
    color: ${props => props.colors.contentDarker};
    text-align: center;
    margin: 20px 0 80px 0;
}
`

const Airbnb = () => {
    return (
        <StyledAirbnb colors={colors}>
            <div className="airbnb__container--header">
                <MainImg img={mainImage} />
                <div className="header__container--titles">
                    <div className="titles__container--flex">
                        <h1>During my UX/UI design internship at <span>Grenadines</span> I worked on the redesign of  <a href="https://www.histoire-patrimoine.fr/"><span>Histoire & Patrimoine</span></a> website & the redesign of the <span>L&P Immobilier</span> website (not out yet !) and many others stuff ! I mainly did UX, UI, Branding and Data analytics.</h1>
                        <div className="titles__container--undertitles">
                            <div className="undertitles__container--roles">
                                <span>Role</span>
                                <small>UX/UI, Branding, Data analytics </small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Date</span>
                                <small>July - November 2020</small>
                            </div>
                            <div className="undertitles__container--roles">
                                <span>Type</span>
                                <small>Internship work</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Content title="Case study still in progress">
                I’m still working on the case study about my internship, but feel free to contact me for further details surrounding what I worked on with Grenadines!
            </Content>
            <div className="img-container-small">
                <img src={gotox92}/>
            </div>
            <h3>It's me :)</h3>
            <NextProject link="/work/atmandala" />
        </StyledAirbnb>
    )
}

export default Airbnb