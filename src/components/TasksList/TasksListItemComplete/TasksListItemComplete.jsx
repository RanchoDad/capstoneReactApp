import { Link } from 'react-router-dom';
import FormatDate from '../../FormatDate/FormatDate';

// Component for the individual task card
export default function TasksListItemComplete({ task, isChecked, onCheckboxChange }) {
  return (
    <div className={`card ${isChecked ? 'checked' : ''}`}>
      <div className="card-body text-left">
        <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
        {task && (
          <p>
            <Link to={`/tasks/${task._id}`}>{task.title}</Link>
          </p>
        )}
        <p>Description: {task.description}</p>
        <p>
          <FormatDate tasks={[task]} />
        </p>
        <p>Completed: {task.completed}
        <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
        </p>
      </div>
    </div>
  );
}