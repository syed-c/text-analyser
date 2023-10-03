import './Navbar.css';


function Navbar(){
  return(
  <nav className="navigation-bar">
    <h3 className="logo">'Text-Analyser'</h3>
    <ul>
      <li><a href="#head-section">'HOME'</a></li>
      <li><a href="#analyser-section">'ANALYSER'</a></li>
      <li><a href="#about-section">'ABOUT'</a></li>
    </ul>
  </nav>
  )
}

export default Navbar;