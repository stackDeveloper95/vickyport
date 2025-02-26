// Navbar.js
import './App.css';
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo" style={{ display: "flex", flexDirection: "row" }}>
                <img style={{ height: "40px" }} src="/image/log.png" alt="" /><h4 style={{ padding: "10px" }}>MyPortfolio</h4></div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;