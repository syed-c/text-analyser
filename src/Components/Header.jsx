import Navbar from './Navbar.jsx';
import './Header.css';


function Header(){
  return(
    <header className='heading'>
    <Navbar />
      <h1 className="heading-text">'TEXT-ANALYSER'</h1> 
      <p className= "subheading-text">'FORMAT YOUR TEXT'</p>
    </header>
    )
}

export default Header;