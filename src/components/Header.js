import Button from './Button';

const Header = () => {
    const onClick = () => {
        console.log('click');
    };

    return (
        <header className='row justify-content-center border-bottom'>
            <h1 className="col-lg-7">React Tasker</h1>
            <Button title='add' styling='btn col-lg-1 btn-info' onClick={onClick} />
        </header>
    )
}

export default Header
