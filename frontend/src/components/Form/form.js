import React from "react";

export const Form = ({ userInput, onFormChange, onFormSubmit }) => {
  const handleChange = (event) => {
    onFormChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Keyword</label>
          <input
            type="text"
            value={userInput}
            required
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
