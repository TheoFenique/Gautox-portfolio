import React from 'react'
import styled from 'styled-components'
import mainImage from '../../assets/work/img/airbnb-big.jpg'

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
        bottom: 0%;
        right: 10%;

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
`

const Airbnb = () => {
    return (
        <StyledAirbnb>
            <div className="airbnb__container--header">
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
        </StyledAirbnb>
    )
}

export default Airbnb