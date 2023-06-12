import TasksListItem from "./TasksListItem/TasksListItem"
import { getUser } from "../../utilities/users-service";

export default function TasksList({tasks }){
    const { userID } = getUser();
    const userTasks = tasks.filter(task => task.uploaded_by === userID);   

    const tasksComponents = userTasks.map(task => <TasksListItem key={task._id} task={task} ></TasksListItem>)
    return (
        <>
            {tasksComponents}
        </>
    )
}