import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormatDate from '../../FormatDate/FormatDate';

export default function TasksListItem({ task }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {isChecked ? (
            <div className="col-md-4 offset-md-7">
              <TaskCard task={task} isChecked={isChecked} onCheckboxChange={handleCheckboxChange} />
            </div>
          ) : (
            <div className="col-md-4 offset-md-1">
              <TaskCard task={task} isChecked={isChecked} onCheckboxChange={handleCheckboxChange} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function TaskCard({ task, isChecked, onCheckboxChange }) {
  return (
    <div className={`card ${isChecked ? 'checked' : ''}`}>
      <div className="card-body text-left">
        <p>
          <Link to={`/tasks/${task._id}`}>{task.title}</Link>
        </p>
        <p>Description: {task.description}</p>
        <p>
          <FormatDate tasks={[task]} />
        </p>
        <p>
          Completed: 
          <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
        </p>
      </div>
    </div>
  );
}
