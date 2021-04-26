import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../assets/style/colors'

const StyledNextProject = styled.div`
box-sizing: border-box;
display: flex;
justify-content: flex-end;
background: ${props=>props.colors.contentDarker};

a {
    text-decoration: none;
    margin: 56px 5% 56px 0px;
    padding: 1% 0;

    

    p {
        color: white;
        font-size: 32px;
        margin: 0;
        line-height: 1;
        font-family: 'nueue-bold';
        transition: 0.3s all;

        &:hover {
            color: #DD4247;
            transition: 0.3s all;
        }
    } 

}
`

const NextProject = ({ link }) => {
    return (
        <StyledNextProject colors={colors}>
            <Link to={link}>
                <p>Go to next project</p>
            </Link>
        </StyledNextProject>
    )
}

export default NextProject