import React from 'react'
import styled from 'styled-components'
import Loadable from 'react-loadable'
import { motion, AnimatePresence } from 'framer-motion'
import { colors } from '../../../assets/style/colors'

import './index.css'

import Navbar from '../navbar/navbar'

const loader = () => <div>loading</div>
const LoadableWrapperScroll = Loadable({
    loader: () => import("../../wrapperScroll"),
    loading: loader,
})


const StyledWrapper = styled.div`
background: ${props => props.colors.background};
width: 100vw;
height: 100vh;
overflow: hidden;


.Wrapper-scrollable {
    box-sizing: border-box;
    position: absolute;
    display: block;
    width: 100vw;
    left: 0;
}

.main-container {
    margin: 0 auto;
}

`

const duration = 0.5

const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: duration,
            delay: duration,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: duration },
    },
}

const Wrapper = ({ children, location }) => {

    return (
        <StyledWrapper colors={colors} className="Wrapper">
            <Navbar />
            <AnimatePresence>
                <motion.main
                    key={location.pathname}
                    variants={variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <LoadableWrapperScroll>
                        <div className="main-container">
                            {children}
                        </div>
                    </LoadableWrapperScroll>
                </motion.main>
            </AnimatePresence>
        </StyledWrapper>
    )
}

export default Wrapper
