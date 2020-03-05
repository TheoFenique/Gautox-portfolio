import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion'

import LocomotiveScroll from 'locomotive-scroll'

import Navbar from '../navbar';

const StyledWrapper = styled.div`
background: #04020F;
width: 100vw;
height: 100vh;
overflow: hidden;

.wrapper-scrollable {
    position: absolute;
    width: 100vw;
}
`

export const Wrapper = (props) => {
    const _wrapperRef = React.createRef();

    useEffect(() => {
        const scrollObj = new LocomotiveScroll({
            el: _wrapperRef.current,
            smooth: true,
            inertia: 0.5,
            getSpeed: true
        });
    }, [])


    return (
        <StyledWrapper className="wrapper">
            <Navbar />
            <div data-scroll-container ref={_wrapperRef} className="wrapper-scrollable" >
                {props.children}
            </div>
        </StyledWrapper>
    )
}

export default Wrapper