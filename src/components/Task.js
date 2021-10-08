import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`container mb-3 p-3 text-center border ${task.reminder ? 'border-success' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes className='col-lg-2' style={{ color: 'red', cursor: 'pointer' }} onClick={() => { onDelete(task.id) }} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
