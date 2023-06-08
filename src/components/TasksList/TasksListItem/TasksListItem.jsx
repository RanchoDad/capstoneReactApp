import FormatDate from '../../FormatDate/FormatDate';
import { Link } from 'react-router-dom';

export default function TasksListItem({ task }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {task && (
            <Link to={`/tasks/${task._id}`} className="card-link">
              <div className="card card-style">
                <div className="card-body">
                  <p>{task.title}</p>
                  <p>Description: {task.description}</p>
                  <FormatDate tasks={[task]} />
                  <p>Completed: {task.completed}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
