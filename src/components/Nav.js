import { Link } from 'react-router-dom'

function Nav(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/github">GitHub Profiler</Link></li>
        </ul>
    )
}

export default Nav;