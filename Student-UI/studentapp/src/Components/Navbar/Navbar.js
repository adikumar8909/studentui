import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
          <div className="nav-header">
            <div className="nav-title">
              Logo
            </div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <Link to="/" target="_self">Home</Link>
            <Link to="About">About</Link>
            <Link to="Signup">Signup</Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar;