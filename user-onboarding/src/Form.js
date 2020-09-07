import React, { useState } from "react";

import FormStyles from "./styles/Form.styles";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  return (
    <FormStyles onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" id="email" name="email" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" id="password" name="password" />
      </label>

      <label htmlFor="terms">
        <input type="checkbox" id="terms" name="terms" />I agree to the Terms of
        Service
      </label>

      <input type="submit" value="Submit" />
    </FormStyles>
  );
};

export default Form;
