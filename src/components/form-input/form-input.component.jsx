import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  ErrorMessage,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, error, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} error={error} {...props} />
      {label ? (
        <FormInputLabel length={props.value.length}> {label} </FormInputLabel>
      ) : null}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </GroupContainer>
  );
};

export default FormInput;
