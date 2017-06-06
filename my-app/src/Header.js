import React from 'react'

import './Header.css'

const Header = (props) => {
  return (
    <header>
      <h1>
        <span className='project-title'>Mood Tracker</span>
        <p className='regular'>This is where we track your mood!</p>
      </h1>
    </header>
  )
}

export default Header;
