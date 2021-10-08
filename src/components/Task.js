import { FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {
    return (
        <div className='row p-3 text-center'>
            <h3>{task.text} <FaTimes className='col-lg-2' style={{ color: 'red', cursor: 'pointer' }} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
