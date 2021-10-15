import { RiListCheck2 } from "react-icons/ri";

const Nav = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="https://github.com/jbramirez03/React-Tasker" target='_blank' rel="noreferrer">
                    React Tasker <span><RiListCheck2 /></span>
                </a>
            </nav>
        </header>
    )
}

export default Nav
