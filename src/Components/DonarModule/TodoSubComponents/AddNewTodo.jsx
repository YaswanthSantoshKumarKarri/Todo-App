import React, { useState } from "react";

const AddNewTodo = (props) => {
  const [todoId, setTodoId] = useState("");
  const [taskProvider, setTaskProvider] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [taskStartDate, settaskStartDate] = useState("");
  const [taskEndDate, setTaskEndDate] = useState("");
  const [status, setStatus] = useState("");

  const submitTodo = () => {
    if (
      todoId !== "" &&
      taskProvider !== "" &&
      taskStartDate !== "" &&
      taskEndDate !== "" &&
      status !== ""
    ) {
      if (!props.fixedTodoId) {
        console.log(todoId, "addInput");
        props.addTodo(todoId, taskProvider, taskStartDate, taskEndDate, status);
      } else {
        props.saveUpdateValues(
          todoId,
          taskProvider,
          taskStartDate,
          taskEndDate,
          status
        );
      }
      setTodoId("");
      setTaskProvider("");
      settaskStartDate("");
      setTaskEndDate("");
      setStatus("");
    }
  };

  return (
    <form>
      <div className="form-floating">
        <input
          type="text"
          name="todoId"
          required
          onChange={(e) => {
            props.fixedTodoId != undefined
              ? setTodoId(props.fixedTodoId)
              : setTodoId(e.target.value);
          }}
          value={todoId}
          placeholder="Enter Todo ID here"
          className="form-control"
          id="todoId"
        />
        <label htmlFor="todoId"> Todo Id</label>
      </div>
      <br />
      <div className="form-floating">
        <input
          type="text"
          autoComplete="off"
          name="taskProvider"
          required
          onChange={(e) => setTaskProvider(e.target.value)}
          value={taskProvider}
          placeholder="Enter Person ID here"
          className="form-control"
          id="taskProvider"
        />
        <label htmlFor="taskProvider"> taskProvider</label>
      </div>{" "}
      <br />
      <div className="form-floating">
        <input
          type="text"
          autoComplete="off"
          name="bloodType"
          required
          onChange={(e) => setBloodType(e.target.value)}
          value={bloodType}
          placeholder="Enter Blood type here"
          className="form-control"
          id="bloodType"
        />
        <label htmlFor="bloodType"> Blood Type</label>
        <br />
      </div>
      <div className="form-floating">
        <input
          type="date"
          autoComplete="off"
          name="taskStartDate"
          required
          onChange={(e) => settaskStartDate(e.target.value)}
          value={taskStartDate}
          placeholder="Enter Donated quantity here"
          className="form-control"
          id="taskStartDate"
        />
        <label htmlFor="taskStartDate"> Donated Quantity</label>
        <br />
      </div>
      <div className="form-floating">
        <input
          type="date"
          autoComplete="off"
          name="taskEndDate"
          required
          onChange={(e) => setTaskEndDate(e.target.value)}
          value={taskEndDate}
          placeholder="Enter task End Date here"
          className="form-control"
          id="taskEndDate"
        />
        <label htmlFor="date"> Task End Date</label>
        <br />
      </div>
      <div className="form-floating">
        <input
          type="text"
          autoComplete="off"
          name="status"
          required
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          placeholder="Enter Hospital ID here"
          className="form-control"
          id="status"
        />
        <label htmlFor="status"> status</label>
      </div>
      <br />
      <button type="submit" className="btn btn-primary" onClick={submitTodo}>
        {props.fixedTodoId ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddNewTodo;
