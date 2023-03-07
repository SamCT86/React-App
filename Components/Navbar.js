import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';


// Styles
import './Navbar.css';
import SearchBar from './SearchBar';

export default function Navbar() {
    const { theme } = useTheme();

    return (
        <div className='navbar' style={{ background: theme }}>
            <nav>
                <Link to='/' className='brand'>
                    <h1>Cooking App</h1>
                </Link>
                <SearchBar />
                <Link to='/create'>Create Recipe</Link>
            </nav>
        </div>
    );
}
