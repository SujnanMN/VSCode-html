import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
        <h1>This is React Dom Tutorial</h1>
        <ul className='list'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
        </>
    )
}

export default Header
