import FormatDate from '../../FormatDate/FormatDueDate';
import ActualDifference from '../../TimeDifference/ActualDifference';
import ProjectedDifference from '../../TimeDifference/ProjectedDifference';


export default function TasksListItemComplete({ task, setTask  }) {
  const timeDifference = () => {
    const createDate = new Date(task.createDate);
    const completeDate = new Date(task.completeDate);
    const diff = Math.abs(createDate - completeDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} Days ${hours} Hours ${minutes} Minutes`;
  };
  console.log(timeDifference())

  return (
    <div className="container">
      <div className="row">
              <div className="card card-style complete-card">
                {task && (
                <div className="card-body">
                  <h4>{task.title}</h4>
                  <p>Description: {task.description}</p>
                    <div>
                      <ProjectedDifference tasks={[task]} />
                      <ActualDifference tasks={[task]} />
                    </div>
                  <FormatDate tasks={[task]} />   
                  <p>Task is Complete!</p>            
                </div>
                )}
          </div>
      </div>
    </div>
  );
}