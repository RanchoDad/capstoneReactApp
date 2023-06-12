import { parseISO } from 'date-fns';


export default function FormatDate ({tasks}){
    const handleFormatDate = (task) =>{
        const date = parseISO(task.dueDate);
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedDueDate = `${month} ${day}, ${year} ${hours}:${minutes.toString().padStart(2, '0')}${ampm}`;
        console.log(formattedDueDate); 
        return formattedDueDate
  };
  return (
    <>{tasks.map((task) => <p key={task._id}>Due Date: {handleFormatDate(task)}</p>)}
    </>
  )
}
