import { Link } from 'react-router-dom'

export default function TasksListItem({task}){
    return(
        <>
        <p>
            <Link to={`/tasks/${task._id}`}>
                {/* there will be a card here indicating all the details of the individual task selected, including
                an edit button, delete button etc */}
                {task.title}
            </Link>
        </p>
        <p>Description: {task.description}</p>
        <p>Due Date: {task.finishBy}</p>
        <p>Completed?: {task.completed}</p>
        {/* must make the above a boolean checkbox that changes background color and 
        does a calculation of how long it took to complete, what percentage of time 
        from creation to due date was used to complete it and have that compiled into
        a stat tracker in a right hand column of the main page */}
        </>
    )
}