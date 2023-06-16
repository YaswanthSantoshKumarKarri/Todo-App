import React, { useState } from "react";

import TodoTable from "../TodoSubComponents/TodoTable";
import AddNewTodo from "../TodoSubComponents/AddNewTodo";
import SearchBar from "../TodoSubComponents/SearchBar";

import NoSearchResultFound from "../../../Assets/Images/NoSearchResultFound.png";
import "./TodoViewComponent.css";
const TodoViewComponent = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [showUpdateTodoForm, setShowUpdateTodoForm] = useState(false);
  const [fixedTodoId, setFixedTodoId] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [searchSuccess, setSearchSuccess] = useState("");

  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      TaskName: "feed puppy",
      TaskProvider: "yash",
      TaskStartDate: "11/11/2023",
      TaskEndDate: "12/12/2023",
      Status: "Completed",
    },
    {
      rowNumber: 2,
      TaskName: "feed kitty",
      TaskProvider: "santa claus",
      TaskStartDate: "2/2/2022",
      TaskEndDate: "1/7/2023",
      Status: "Pending",
    },
    {
      rowNumber: 3,
      TaskName: "feed monkey bananas",
      TaskProvider: "jana",
      TaskStartDate: "3/3/2023",
      TaskEndDate: "7/7/2023",
      Status: "Completed",
    },
    {
      rowNumber: 4,
      TaskName: "beat teddy",
      TaskProvider: "buddi",
      TaskStartDate: "4/4/2023",
      TaskEndDate: "4/7/2023",
      Status: "Over due",
    },
  ]);

  const addTodo = (
    todoId,
    taskProvider,
    taskStartDate,
    taskEndDate,
    status
  ) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: todos.length + 1,
      TaskName: todoId,
      TaskProvider: taskProvider,
      TaskStartDate: taskStartDate,
      TaskEndDate: taskEndDate,
      Status: status,
    };
    setShowAddTodoForm(false);
    setTodos((todos) => [...todos, newTodo]);
    console.log(todos, "todos list ");
  };

  const deleteTodo = (deleteTodoTaskName, searchtxt) => {
    let filtered = todos.filter(function (value) {
      return value.TaskName !== deleteTodoTaskName;
    });
    setTodos(filtered);
    let filtered1 = searchResult.filter(function (value) {
      return value.TaskName !== deleteTodoTaskName;
    });
    setSearchResult(filtered1);
    if (searchtxt != "") {
      console.log("searchtxt find searchehcbjah", searchtxt);
      searchHandler(searchtxt);
    }
  };

  const updateTodo = (updateTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      if (value.rowNumber === updateTodoRowNumber) {
        setShowUpdateTodoForm(!showUpdateTodoForm);
        setFixedTodoId(value.TaskName);
        setShowAddTodoForm(false);
      }
    });
  };

  const saveUpdateValues = (
    todoId,
    taskProvider,
    taskStartDate,
    taskEndDate,
    status
  ) => {
    console.log(todoId, "addInput");
    let filtered = todos.filter(function (value) {
      if (value.TaskName === fixedTodoId) {
        value.TaskProvider = taskProvider;
        value.TaskStartDate = taskStartDate;
        value.TaskEndDate = taskEndDate;
        value.Status = status;
      }
      return value;
    });
    setTodos(filtered);
    let filtered1 = searchResult.filter(function (value) {
      if (value.TaskName === fixedTodoId) {
        value.TaskProvider = taskProvider;
        value.TaskStartDate = taskStartDate;
        value.TaskEndDate = taskEndDate;
        value.Status = status;
      }
      return value;
    });
    setSearchResult(filtered);
    setShowUpdateTodoForm(false);
  };

  const searchHandler = (searchtxt) => {
    setSearchTxt(searchtxt);
    setSearchResult([]);
    let count = 0;
    let filtered = todos.filter(function (value) {
      if (
        value.TaskName.includes(searchtxt) ||
        value.TaskProvider.includes(searchtxt) ||
        value.Status.includes(searchtxt)
      ) {
        count++;
        setSearchResult((searchResult) => [...searchResult, value]);
      }
    });
    count == 0 ? setSearchSuccess(true) : setSearchSuccess(false);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>Todos List</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Work<cite title="Source Title"> &</cite> Gain.
              <SearchBar searchHandler={searchHandler} />
            </figcaption>
          </figure>
        </div>
        <div className="card-body">
          {searchSuccess && (
            <div className="search-msg">
              <img src={NoSearchResultFound} alt="alt" />
              <br />
              <span>No items match your search</span>
              <br />
              <p style={{ fontSize: "10px", Color: "grey" }}>
                Try a different search
              </p>
            </div>
          )}
          {!searchSuccess && (
            <TodoTable
              todos={todos}
              searchTxt={searchTxt}
              searchResult={searchResult}
              searchSuccess={searchSuccess}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              showAddTodoForm={showAddTodoForm}
            />
          )}
          <button
            onClick={() => {
              setShowAddTodoForm(!showAddTodoForm);
              setShowUpdateTodoForm(false);
            }}
            className="btn btn-outline-primary"
          >
            {showAddTodoForm ? "close new Todo" : "new Todo"}
          </button>
          <br />
          <br />
          {showAddTodoForm && <AddNewTodo addTodo={addTodo} />}
          <br />
          {showUpdateTodoForm && (
            <AddNewTodo
              fixedTodoId={fixedTodoId}
              saveUpdateValues={saveUpdateValues}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoViewComponent;
