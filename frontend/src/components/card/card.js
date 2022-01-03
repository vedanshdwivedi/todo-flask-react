import React from "react";

export const Card = ({ listOfTodos }) => {
  return <>
        {listOfTodos.map(todo => {
            return <ul key={todo.id}>
                <li><h1>{ todo.item }</h1></li>
            </ul>
        })}
  </>;
};
