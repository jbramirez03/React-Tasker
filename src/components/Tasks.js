import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {
    return (
        <div className='mt-3'>
            {tasks.map(task => (<Task key={task.id} task={task} onDelete={onDelete} />))}
        </div>
    )
}

export default Tasks
