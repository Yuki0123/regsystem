import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav className='navbar'>
        <NavLink exact to='/' className='header-item' activeClassName='active'>Home</NavLink>
        <NavLink to='/item1' className='header-item' activeClassName='active'>Item1</NavLink>
        <NavLink to='/item2' className='header-item' activeClassName='active'>Item2</NavLink>
      </nav>
    );
  }
}
export default Navigation;
