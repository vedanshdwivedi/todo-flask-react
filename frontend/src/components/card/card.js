import React from "react";

export const Card = ({ listOfTodos, onClick }) => {
  const hitDeleteEndpoint = (event) => {
    onClick(event.target.id);
  };

  return (
    <>
      {listOfTodos.map((todo) => {
        return (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{todo.item}</h5>
              <a
                href="#"
                id={todo.id}
                class="btn btn-primary"
                onClick={hitDeleteEndpoint}
              >
                Delete
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};
