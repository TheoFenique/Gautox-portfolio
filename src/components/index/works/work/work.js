import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../../../assets/style/colors'

const StyledWork = styled.div`
position: relative;
display: inline-block;
width: 564px;
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
    height: 414px;
    width: 100%;
}
`


const Work = (props) => {
    return (
        <StyledWork colors={colors} data-scroll>
            <div className="container">
                <div className="img__container">
                    <img src="" alt=""/>
                </div>
                <div className="container__content">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            </div>
        </StyledWork>
    )
}

export default Work