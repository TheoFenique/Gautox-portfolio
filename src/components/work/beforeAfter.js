import React from 'react'
import styled from 'styled-components'

import { colors } from '../../assets/style/colors'


const StyledBeforeAfter = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin: auto;



h3 {
    font-size: 32px;
    color: ${props => props.colors.contentDarker};
    font-family: 'nueue-bold';
    margin-top: 0;
}

.before, .after {
    box-sizing: border-box;
    width: 25%;
    padding: 0 2%;
    @media screen and (max-width : 730px) {
       display: none;
    }
}

.before h3, .before p {
    text-align: right;
}


.imgs {
    display: flex;
    justify-content: space-between;
    width: 50%;
    @media screen and (max-width : 730px) {
       width: 80%;
    }

    img {
        width: 48%;
        box-shadow: 0px 3px 8px rgba(0,3,8, 0.2);
        border-radius: 10px;
    }
}

`

const BeforeAfter = (props) => {
    return (
        <StyledBeforeAfter colors={colors}>
            <div className="before">
                <h3>Before</h3>
                <p>{props.beforeContent}</p>
            </div>
            <div className="imgs">
                <img src={props.beforeImg}/>
                <img src={props.afterImg}/>
            </div>
            <div className="after">
                <h3>After</h3>
                <p>{props.afterContent}</p>    
            </div>
        </StyledBeforeAfter>
    )
}

export default BeforeAfter