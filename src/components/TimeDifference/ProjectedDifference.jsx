
export default function ProjectedDifference ({tasks}){

const timeDifference = (task) => {
    const dueDate = new Date(task.dueDate);
    const createDate = new Date(task.createDate);
    const diff = Math.abs(dueDate - createDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const formattedTime = `${days} Days ${hours} Hours ${minutes} Minutes`;
    return formattedTime
  };
  return (
    <>
        {tasks.map((task) => <p key={task._id}>Projected Time to Complete: {timeDifference(task)}</p>)}
    </>
)
}