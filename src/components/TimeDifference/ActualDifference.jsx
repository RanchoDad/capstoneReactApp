
export default function ActualDifference ({tasks}){

    const timeDifference = (task) => {
        const createDate = new Date(task.createDate);
        const completeDate = new Date(task.completeDate);
        const diff = Math.abs(createDate - completeDate);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const formattedTime = `${days} Days ${hours} Hours ${minutes} Minutes`;
        return formattedTime
    };
    return (
        <>
            {tasks.map((task) => <p key={task._id}>Actual Time to Complete: {timeDifference(task)}</p>)}
        </>
    )
}