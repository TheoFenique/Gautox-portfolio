import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
box-sizing: border-box;
display: flex;
align-items: baseline;
justify-content: center;
padding: 0 20%;

 @media screen and (max-width : 1000px) {
    padding: 0 1%;
}

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
`

const Content = ({ title, children }) => {
    return (
        <StyledContent className="general__content">
            <h2>{title}</h2>
            <p>{children}</p>
        </StyledContent>
    )
}

export default Content