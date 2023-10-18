import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = () => {
    setTaskList([...taskList, { title: task, done: false }]);
    setTask("");
  };
  const handleDelete = (index) => {
    setTaskList((taskList) =>
      taskList.filter((tasks, tIndex) => {
        return tIndex != index;
      })
    );
  };

  const handleUpdateMode = (index) => {
    setUpdateMode((updateMode) => !updateMode);
    setTask(taskList[index].title);
    setEditedIndex(index);
  };

  const handleUpdate = () => {
    setTaskList((taskList) =>
      taskList.map((sTask, tIndex) => {
        if (editedIndex == tIndex) {
          return { title: task };
        }
        return sTask;
      })
    );
    setTask("");
    setEditedIndex(null);
    setUpdateMode((updateMode) => !updateMode);
  };

  return (
    <div className="container mt-5">
      <div className="row rol-md-12">
        <div className="col-md-4">
          <div>
            <input
              className="form-control"
              name="taskTile"
              value={task}
              onChange={handleChange}
            />
            <button
              className={`btn ${updateMode ? "btn-info" : "btn-success"} mt-4`}
              onClick={updateMode ? handleUpdate : handleSubmit}
            >
              {updateMode ? "Update" : "Create"}
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <ul className="list-group">
            {taskList &&
              taskList.map((task, index) => (
                <li className="list-group-item" key={`key${index}`}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label className="form-check-label" for="firstRadio">
                      {task.title}
                    </label>
                    <div>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleUpdateMode(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                      </button>
                      <button
                        className="btn btn-danger ml-1"
                        onClick={() => handleDelete(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-archive"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
