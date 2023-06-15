import TasksListItem from "./TasksListItem/TasksListItem"
import { getUser } from "../../utilities/users-service";

export default function TasksList({tasks }){
    const { userID } = getUser();
    const userTasks = tasks.filter(task => task.uploaded_by === userID);   

    const incompleteTasksComponents = userTasks
    .filter((task) => !task.completed)
    .map((task) => <TasksListItem key={task._id} task={task} />);

  
    return (
        <>
            {incompleteTasksComponents}
            
        </>
    )
}