import FormatDate from '../../FormatDate/FormatDueDate';
import { Link } from 'react-router-dom';
import ProjectedDifference from '../../TimeDifference/ProjectedDifference';


export default function TasksListItem({ task  }) {

  return (
    <div className="container">
      <div className="row">
              <div className="card card-style cursor-hover">
                {task && (
                <Link to={`/tasks/${task._id}`} className="card-link remove-line">
                <div className="card-body">
                  <h4>{task.title}</h4>
                  <p>Description: {task.description}</p>
                    <div>
                      <ProjectedDifference tasks={[task]} />
                    </div>
                  <FormatDate tasks={[task]} />               
                </div>
                </Link>
                )}
          </div>
      </div>
    </div>
  );
}
