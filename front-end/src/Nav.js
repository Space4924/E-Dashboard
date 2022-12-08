import React from 'react'
import './App.css'
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = styled(AppBar)`
background:#111111`


const Line = styled(NavLink)`
color:inherit;
margin:10px 20px;
text-decoration:none;
font-size:20px;
margin-right:20px;
`


const Navbar = () => {
  const Navigate = useNavigate();
  const auth = localStorage.getItem('user');

  const logout = () => {
    localStorage.clear();
    Navigate('/signin');

  }




  return (
    <Header position='static'  >
      {auth ?
        <Toolbar>
          <Line to='/'>Home</Line>
          <Line to='/product'>All Products</Line>
          <Line to='/feature'>Add Product</Line>
          <Line onClick={logout} to="/signin">Logout({JSON.parse(auth).name})</Line>
          
        </Toolbar> :
        <div className='login'><Line to="/signin">SignIn</Line>
          <Line to='/login'>Login</Line></div>
      }

    </Header>
  )
}

export default Navbar;