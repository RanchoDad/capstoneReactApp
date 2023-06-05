import TasksListItem from "./TasksListItem/TasksListItem"

export default function TasksList({tasks}){
    const tasksComponents = tasks.map(task => <TasksListItem key={task._id} task={task}></TasksListItem>)
    return (
        <>
            {tasksComponents}
        </>
    )
}