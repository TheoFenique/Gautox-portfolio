import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../../../assets/style/colors'

const StyledWork = styled.div`
position: relative;
display: inline-block;
width: 47.5%;
margin-top: 55px;

.container__content {
    margin: 15px 0;
    h3 {
        font-family: 'nueue-bold';
        font-size: 32px;
        color: ${props => props.colors.contentDarker};
        margin: 0;
    }
    
    p {
        width: 370px;
        font-family: 'nueue-bold';
        margin: 0;
        font-size: 18px;
    }
}

.img__container{
    background: #1E9481;
    width: 100%;

    img {
        width: 100%;
    }
}
`


const Work = (props) => {
    return (
        <StyledWork data-scroll colors={colors} >
            <Link data-scroll data-scroll-speed="1" data-scroll-direction="vertical"  to={props.work.link} className="container">
                <div data-scroll className="img__container">
                    <img data-scroll src={props.work.image} alt=""/>
                </div>
                <div data-scroll className="container__content">
                    <h3 data-scroll>{props.work.title}</h3>
                    <p data-scroll>{props.work.content}</p>
                </div>
            </Link>
        </StyledWork>
    )
}

export default Work