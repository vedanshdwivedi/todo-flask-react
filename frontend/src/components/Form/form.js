import React from "react";

export const Form = ({ userInput, onFormChange }) => {
  const handleChange = (event) => {
    onFormChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          required
          onChange={handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
};
