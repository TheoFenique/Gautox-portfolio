import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../../../assets/style/colors'

const StyledWork = styled.div`
position: relative;
display: inline-block;
width: 47.5%;
min-width:320px;

@media screen and (max-width : 730px) {
    width: 80%;
    margin: auto;
}

:hover {
    .img__container{

        img {
            transform: scale(1.2);
            transition: cubic-bezier(.19,1,.22,1) 1s;
        }
    }
}

.container__content {
    margin: 0 0 80px 0;

    h3 {
        font-family: 'nueue-bold';
        font-size: 32px;
        color: ${props => props.colors.contentDarker};
        margin: 0;
    }
    
    p {
        font-family: 'nueue-bold';
        margin: 0;
        font-size: 18px;
        color: ${props => props.colors.content};
    }
}

.img__container{
    width: 100%;
    overflow: hidden;

    img {
        width: 100%;
        transform: scale(1.1);
        transition: cubic-bezier(.19,1,.22,1) 1s;
    }
}
`


const Work = (props) => {
    return (
        <StyledWork colors={colors} >
            <Link to={props.work.link} className="container">
                <div className="img__container">
                    <img src={props.work.image} alt=""/>
                </div>
                <div className="container__content">
                    <h3>{props.work.title}</h3>
                    <p>{props.work.content}</p>
                </div>
            </Link>
        </StyledWork>
    )
}

export default Work