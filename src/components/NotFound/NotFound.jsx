import React from 'react'
import { useLocation } from 'react-router'
import HeaderNav from '../HeaderNav/HeaderNav'
import styles from './NotFound.module.css'
import img from './fail.jpg'


function NotFound() {
  let location = useLocation()
  
  return (
    <>
        <HeaderNav/>
        <img src={img} alt="Not Found" className={styles.image}/>
        <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </>
  )
}

export default NotFound
