import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div class="nav">
        <input type="checkbox" id="nav-check"/>
          <div class="nav-header">
            <div class="nav-title">
              Logo
            </div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links">
            <Link to="/" target="_self">Home</Link>
            <Link to="About">About</Link>
            <Link to="Signup">Signup</Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar;