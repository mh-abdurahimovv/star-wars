import React from 'react'
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
import styles from './HeaderNav.module.css'

function HeaderNav () {

    // const [activeLInk, setActiveLink] = useState(null)

    // const handleClick = (index) => {
    //     setActiveLink(index)
    //     console.log(index)
    // }

  return (
    <div className={styles.container}>
    <ul className={styles.list}>
      <li className={styles.list_item} >
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink to='/people/?page=1' >People</NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink to='/search' >Search</NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink to='/* ' >Not Found</NavLink>
      </li>
    </ul>
  </div>
  )
}

export default HeaderNav
