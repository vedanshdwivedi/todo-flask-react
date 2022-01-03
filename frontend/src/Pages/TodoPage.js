import React, { useState, useEffect } from "react";
import { Card } from "../components/card/card";
import { Form } from "../components/Form/form";

export const TodoPage = () => {
  const [todo, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data));
  }, []);

  const handleFormChange = (inputValue) => {
    setAddTodo(inputValue);
  };

  const handleFormSubmit = () => {
    fetch("api/create", {
      method: "POST",
      body: JSON.stringify({
        content: addTodo,
      }),
    });
  };

  return (
    <>
      <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
      <Card listOfTodos={todo} />
    </>
  );
};
