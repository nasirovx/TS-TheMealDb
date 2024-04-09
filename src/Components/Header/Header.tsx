import React,{useState} from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()
    const [input, setInput] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search/${input}`);
        setInput('');
      };

  return (
    <nav className='navbar'>
      <div className="container">
        <div className='nav_content'>
          <Link to='/'><img src='https://www.themealdb.com/images/logo-small.png' alt="" /></Link>
          <div className='nav'>
            <div className='Link'>
              <div className='home'><Link to='/'>Home</Link></div>
              <div className='api'><Link to='/api'>API</Link></div>
            </div>
          <form onSubmit={handleSubmit} className='form_control'>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder=' Search' type="text" />
            <button type='submit'>Send</button>
          </form>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

