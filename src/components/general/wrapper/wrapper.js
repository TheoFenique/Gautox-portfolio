import React, { useEffect, useRef } from 'react'
import Loadable from 'react-loadable'
import { motion, AnimatePresence } from 'framer-motion'

import './index.css'

import Navbar from '../navbar/navbar'

const loader = () => <div>loading</div>
const LoadableWrapperScroll = Loadable({
    loader: () => import("./wrapperScroll/WrapperScroll"),
    loading: loader,
})

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
        <div className="Wrapper">
            <Navbar />
            <div
                style={{
                    margin: `60px auto 0`,
                    maxWidth: 960,
                    padding: `1em`,
                }}
            >
                <AnimatePresence>
                    <motion.main
                        key={location.pathname}
                        variants={variants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        <LoadableWrapperScroll>
                            {children}
                        </LoadableWrapperScroll>
                    </motion.main>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Wrapper
