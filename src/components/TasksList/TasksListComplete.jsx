import { getUser } from "../../utilities/users-service";
import TasksListItemComplete from "./TasksListItemComplete/TasksListItemComplete";

export default function TasksListComplete({tasks }){
    const { userID } = getUser();
    const userTasks = tasks.filter(task => task.uploaded_by === userID);   

    const completeTasksComponents = userTasks
        .filter((task) => task.completed)
        .map((task) => <TasksListItemComplete key={task._id} task={task} />);
        return (
            <>
                {completeTasksComponents}
            </>
    )
}