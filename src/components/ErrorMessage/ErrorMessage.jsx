import React from 'react'
import styles from './ErrorMessage.module.css'

function ErrorMessage () {
  return (
    <>
        <p className={styles.text}>
            The dark side of the force won<br/>
            We can not display data. <br/> 
            Come back when we fix everything      
        </p> 
    </>
  )
}

export default ErrorMessage
