import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledNextProject = styled.div`
padding-left: 50%;
margin-bottom: 150px;
a {
    text-decoration: none;
    p {
        color: white;
        font-size: 170px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;
        color: rgba(255,255,255,0);
        margin: 0;
        font-family: 'Spectral';
        line-height: 1;
        transition: all 0.3s;

    }
    &:hover {
        p {
            color: rgba(255,255,255,1);
        }
    }
}
`

const NextProject = ({ link }) => {
    return (
        <StyledNextProject data-scroll-section>
            <Link to={link}>
                <p>Next</p>
                <p>Project</p>
            </Link>
        </StyledNextProject>
    )
}

export default NextProject