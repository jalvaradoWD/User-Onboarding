import React from "react";

const Form = () => {
  return (
    <form>
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
        I agree Terms of Service
        <input type="checkbox" id="terms" name="terms" />
      </label>

      <input type="submit" />
    </form>
  );
};

export default Form;
