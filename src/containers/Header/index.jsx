import React from 'react';
import Nav from '../../components/Nav';
import { items } from '../../data/menu.json'

const Header = () => {
  return (
    <header>
      <Nav options={items}/>
    </header>
  )
}

export default Header
