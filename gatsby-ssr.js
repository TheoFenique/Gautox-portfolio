import React from "react";
import Wrapper from "./src/components/general/Wrapper";

export const wrapPageElement = ({ element, props }) => {
  return <Wrapper {...props}>{element}</Wrapper>;
};
