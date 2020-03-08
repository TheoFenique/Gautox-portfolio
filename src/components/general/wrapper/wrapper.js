import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './index.css'

import Navbar from '../navbar/navbar'

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
    useEffect(() => {
        import("locomotive-scroll").then(locomotiveModule => {
            const scroll = new locomotiveModule.default({
                el: document.querySelector(".Wrapper-scrollable"),
                smooth: true,
                inertia: 0.5,
                getSpeed: true
            })
        })
    }, [])

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
                        <div data-scroll-container className="Wrapper-scrollable">
                            {children}
                        </div>
                    </motion.main>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Wrapper
