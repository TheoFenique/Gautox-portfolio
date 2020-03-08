import React from "react";
import Wrapper from "./src/components/general/Wrapper";

const transitionDelay = 500;

export const wrapPageElement = ({ element, props }) => {
  return <Wrapper {...props}>{element}</Wrapper>;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};
