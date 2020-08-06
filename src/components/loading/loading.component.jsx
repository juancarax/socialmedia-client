import React from "react";
import { SpinnerComponent } from "./loading.styles";

const Loading = ({ ...props }) => {
  console.log(props);
  return <SpinnerComponent props={props} />;
};

export default Loading;
