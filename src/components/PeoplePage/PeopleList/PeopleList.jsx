import React from 'react'

import styles from "./PeopleList.module.css"

function PeopleList({people}) {
  return (
    <>
      <ul className={styles.list_container}>
            {people.map(({name, img, id})=> 
                <li key={id} className={styles.list_item} >
                    <a href="d">
                        <img className={styles.person_photo} src={img} alt={name} />
                        <p className=''>{name}</p>
                    </a>
                </li>
            )}
        </ul>
    </>
  )
}

export default PeopleList
