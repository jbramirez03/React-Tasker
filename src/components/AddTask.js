import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Add task');
            return
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Reminder name</label>
                <input type="text" className="form-control" placeholder="Haircut appointment..." value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div>
                <label>Day and Time</label>
                <input type="text" className="form-control" placeholder="Sep 12th at 1:00pm" value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div class="form-check">
                <input type="checkbox" checked={reminder} className="form-check-input" value={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
                <label className="form-check-label">Set reminder</label>
            </div>
            <button type="submit" value='Save Task' className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddTask
