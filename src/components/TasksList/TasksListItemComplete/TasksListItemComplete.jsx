import FormatDate from '../../FormatDate/FormatDate';


export default function TasksListItemComplete({ task, setTask  }) {

  return (
    <div className="container">
      <div className="row">
              <div className="card card-style offset-md-4">
                {task && (
                <div className="card-body">
                  <h4>{task.title}</h4>
                  <p>Description: sss{task.description}</p>
                  <FormatDate tasks={[task]} />   
                  <p>Task is Complete!</p>            
                </div>
                )}
          </div>
      </div>
    </div>
  );
}