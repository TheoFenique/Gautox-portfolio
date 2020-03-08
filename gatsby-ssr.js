import React from "react";
import Wrapper from "./src/components/general/wrapper";

export const wrapPageElement = ({ element, props }) => {
  return <Wrapper {...props}>{element}</Wrapper>;
};
