import Button from './Button';

const Header = () => {
    return (
        <header className='row justify-content-center'>
            <h1 className="col-lg-7">React Tasker</h1>
            <Button title='add' styling='btn btn-info col-lg-1' />
        </header>
    )
}

export default Header
