import './index.scss';
import { Link } from 'react-router-dom';

export function LayoutHeader() {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    {/* <img src={logo} alt="logo" /> */}
                    LOGO
                </Link>
            </div>

            <nav className="nav">
                <ul>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/news">NEWS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    )
}