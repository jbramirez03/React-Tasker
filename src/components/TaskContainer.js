import Button from './Button';

const TaskContainer = ({ onAdd, currentShow }) => {
    return (
        <div className='row justify-content-center border-bottom'>
            <h1 className="col-lg-7">React Tasker</h1>
            <Button title={currentShow ? 'Close' : 'Add'} styling={currentShow ? 'btn col-lg-1 btn-danger' : 'btn col-lg-1 btn-info'} onClick={onAdd} />
        </div>
    )
}

export default TaskContainer
