import React from "react";
import TodoRowItems from "./TodoRowItems";

const TodoTable = ({
  todos,
  deleteTodo,
  updateTodo,
  showAddTodoForm,
  searchResult,
  searchTxt,
}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task Name</th>
          <th scope="col">Task provider</th>
          <th scope="col">Task start date</th>
          <th scope="col">Task end date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {searchResult.length > 0
          ? searchResult.map((res) => (
              <TodoRowItems
                res={res}
                deleteTodo={deleteTodo}
                searchTxt={searchTxt}
                updateTodo={updateTodo}
                showAddTodoForm={showAddTodoForm}
                searchResult={searchResult}
                key={res.rowNumber}
              />
            ))
          : todos.map((res) => (
              <TodoRowItems
                res={res}
                deleteTodo={deleteTodo}
                searchTxt={searchTxt}
                updateTodo={updateTodo}
                showAddTodoForm={showAddTodoForm}
                key={res.rowNumber}
              />
            ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
