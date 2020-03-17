import React, { useRef, useEffect } from 'react'
import LocomotiveScroll from "locomotive-scroll"

const WrapperScroll = ({ children }) => {
    const _wrapperRef = useRef(null);
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: _wrapperRef.current,
            smooth: true,
            inertia: 0.5,
            getSpeed: true,
            smoothMobile: true
        })
    }, [])

    return (
        <div data-scroll-container ref={_wrapperRef} className="Wrapper-scrollable">
            {children}
        </div>
    )
}

export default WrapperScroll