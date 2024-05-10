import React from "react";
//Imports de los Values Exportados
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({task,toggleComplete}) => {
  return (
    <div className="ToDo">
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default ToDo;
