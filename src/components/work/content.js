import React from 'react'
import styled from 'styled-components'
import { colors } from '../../assets/style/colors'

const StyledContent = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 80px auto;

 @media screen and (max-width : 1000px) {
    padding: 0 1%;
}

h2 {
    font-family: 'nueue-bold';
    font-size: 32px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: 40%;
    line-height: 1.2!important;
    color: ${props=>props.colors.contentDarker};
    @media screen and (max-width : 730px) {
        width: 70%;
    }
}
>p {
    box-sizing: border-box;
    width: 40%;
    color: #9396A4;
    color: ${props=>props.colors.contentDark};
    @media screen and (max-width : 730px) {
        width: 70%;
    }
}
`

const Content = ({ title, children }) => {
    return (
        <StyledContent colors={colors} className="general__content">
            <h2>{title}</h2>
            <p>{children}</p>
        </StyledContent>
    )
}

export default Content