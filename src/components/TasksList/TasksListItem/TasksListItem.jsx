import FormatDate from '../../FormatDate/FormatDueDate';
import { Link } from 'react-router-dom';


export default function TasksListItem({ task  }) {
  const timeDifference = () => {
    const dueDate = new Date(task.dueDate);
    const createDate = new Date(task.createDate);
    const diff = Math.abs(dueDate - createDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} Days ${hours} Hours ${minutes} Minutes`;
  };
  console.log(timeDifference())
  return (
    <div className="container">
      <div className="row">
              <div className="card card-style cursor-hover">
                {task && (
                <Link to={`/tasks/${task._id}`} className="card-link remove-line">
                <div className="card-body">
                  <h4>{task.title}</h4>
                  <p>Description: {task.description}</p>
                  <p>
                      Projected total time: {timeDifference()}
                  </p>
                  <FormatDate tasks={[task]} />               
                </div>
                </Link>
                )}
          </div>
      </div>
    </div>
  );
}
