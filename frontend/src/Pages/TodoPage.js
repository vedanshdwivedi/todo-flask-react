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

  const handleDelete = (delete_id) => {
    fetch("/delete", {
      method: "POST",
      body: JSON.stringify({
        id: delete_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        getLatestTodos();
      });
  };

  const handleFormSubmit = () => {
    fetch("/write", {
      method: "POST",
      body: JSON.stringify({
        keyword: addTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        setAddTodo("");
        getLatestTodos();
      });
  };

  const getLatestTodos = () => {
    fetch("/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data));
  };

  return (
    <>
      <Form
        userInput={addTodo}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
      <Card listOfTodos={todo} onClick={handleDelete} />
    </>
  );
};
