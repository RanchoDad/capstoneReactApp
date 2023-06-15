import FormatDate from '../../FormatDate/FormatDate';
import { Link } from 'react-router-dom';


export default function TasksListItem({ task, setTask  }) {

  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-md-6"> */}
              <div className="card card-style">
           
                {task && (
                <Link to={`/tasks/${task._id}`} className="card-link remove-line">
                <div className="card-body ">
                  <p>{task.title}</p>
                  <p>Description: {task.description}</p>
                  <FormatDate tasks={[task]} />
                  {/* {completeTheTask ? (
                    <p>The Task is Complete!</p>
                  ) : ( */}
                  
                {/* )} */}
                </div>
                </Link>
                )}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
