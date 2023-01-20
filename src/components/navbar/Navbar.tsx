import './Navbar.css';
import Container from '@mui/material/Container';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Navbar() {
  const [searchText, setSearchText] = React.useState<string>('');

  return (
    <div className="navbar-cover">
      <Container className='navbar' maxWidth="lg">
        <a className='logo' href='http://netapp.com'>
          <img className='logo' src="./netapp.webp" alt='NetApp' ></img>
        </a>
        
        <Button variant='plain' className='app-logo'>AIQKiosk</Button>
      </Container>
    </div>
  );
}

export default Navbar;