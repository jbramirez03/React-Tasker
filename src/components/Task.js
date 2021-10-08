import React from 'react'

const Task = ({ task }) => {
    return (
        <div className='row p-3'>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
