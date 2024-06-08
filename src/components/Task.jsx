import { React, useState } from "react";
import "../styles/Task.css";

function Task({ task }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`task ${isChecked ? "completed" : ""}`}>
      <div className="task-button--complete" onClick={handleButtonClick}>
        {isChecked && (
          <span className="task__checkmark">&#10003;</span> // �����ڵ� üũ��ũ
        )}
      </div>
      <div className="task-content">{task}</div>

      <div className="task-button--delete">
        <div className="task__xmark">&#10005;</div>
      </div>
    </div>
  );
}

export default Task;
