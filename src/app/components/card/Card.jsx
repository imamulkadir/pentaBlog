import Image from "next/image"
import styles from "./card.module.css"

import React from 'react'
import Link from "next/link"

export const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, atque.</h1></Link>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur magni asperiores nemo aut mollitia ducimus quo quidem, voluptates libero odio aperiam fuga magnam deserunt. Ea, necessitatibus. Rem illum dolor corrupti...</p>
            <Link href="/" className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}
