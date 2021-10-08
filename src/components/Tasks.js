const tasks = [
    {
        id: 1,
        text: 'Dentist appointment',
        day: 'Feb 12th at 12:00pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Change car oil',
        day: 'Apr 9th at 2:00pm',
        reminder: false
    },
    {
        id: 3,
        text: 'Saturday class',
        day: 'Mar 1st at 11:00am',
        reminder: false
    }
]

const Tasks = () => {
    return (
        <>
            {tasks.map(task => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
