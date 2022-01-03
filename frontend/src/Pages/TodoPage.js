import React, { useState, useEffect } from "react";
import { Card } from "../components/card/card";

export const TodoPage = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response) {
          return response.json();
        }
      })
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Card />
    </>
  );
};
