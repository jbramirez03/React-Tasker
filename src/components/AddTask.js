import React from 'react'

const AddTask = () => {
    return (
        <form>
            <div>
                <label>Reminder name</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Haircut appointment..." />
            </div>
            <div>
                <label>Day and Time</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Sep 12th at 1:00pm" />
            </div>
            <div class="form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Set reminder</label>
            </div>
            <button type="submit" value='Save Task' className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddTask
