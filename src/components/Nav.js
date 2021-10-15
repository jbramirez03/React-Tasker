import { RiListCheck2, RiInstagramLine, RiGithubFill } from "react-icons/ri";

const Nav = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="https://github.com/jbramirez03/React-Tasker" target='_blank' rel="noreferrer">
                    React Tasker <span><RiListCheck2 /></span>
                </a>
                <a className='navbar-brand' href="https://www.instagram.com/temptado/" targer='_blank' rel='noreferrer'><RiInstagramLine /></a>
                <a className='navbar-brand' href="https://github.com/jbramirez03" targer='_blank' rel='noreferrer'><RiGithubFill /></a>
            </nav>
        </header>
    )
}

export default Nav
