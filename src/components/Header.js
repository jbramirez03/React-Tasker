import Button from './Button';

const Header = ({ onAdd }) => {
    return (
        <header className='row justify-content-center border-bottom'>
            <h1 className="col-lg-7">React Tasker</h1>
            <Button title='add' styling='btn col-lg-1 btn-info' onClick={onAdd} />
        </header>
    )
}

export default Header
