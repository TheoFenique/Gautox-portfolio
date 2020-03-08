import React, { useRef, useEffect } from 'react'

const WrapperScroll = ({ children }) => {
    const _wrapperRef = useRef(null);
    useEffect(() => {
        import("locomotive-scroll").then(locomotiveModule => {
            const scroll = new locomotiveModule.default({
                el: _wrapperRef.current,
                smooth: true,
                inertia: 0.5,
                getSpeed: true
            })
        })
    }, [])

    return (
        <div data-scroll-container ref={_wrapperRef} className="Wrapper-scrollable">
            {children}
        </div>
    )
}

export default WrapperScroll