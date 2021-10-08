import Button from './Button';

const Header = () => {
    return (
        <header className='row justify-content-center'>
            <h1 className="col-lg-7">React Tasker</h1>
            <Button title='add' styling='btn col-lg-1 btn-info' />
        </header>
    )
}

export default Header
