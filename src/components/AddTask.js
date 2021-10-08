import { useState } from 'react';

const AddTask = () => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState('false');


    return (
        <form>
            <div>
                <label>Reminder name</label>
                <input type="text" className="form-control" placeholder="Haircut appointment..." value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div>
                <label>Day and Time</label>
                <input type="text" className="form-control" placeholder="Sep 12th at 1:00pm" value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div class="form-check">
                <input type="checkbox" className="form-check-input" value={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
                <label className="form-check-label">Set reminder</label>
            </div>
            <button type="submit" value='Save Task' className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddTask
