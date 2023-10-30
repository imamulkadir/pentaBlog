import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, PentaPet here!</b><br /> Discover my stories and creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptatem.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus porro amet, recusandae consequuntur officiis rem, quod, dolorem maiores et voluptas voluptate architecto omnis culpa sapiente! Mollitia assumenda corrupti ea. Sapiente ipsum quae quia, optio, tenetur consequuntur quam distinctio blanditiis iusto nesciunt expedita aperiam tempore voluptatibus dolore? Nisi nihil et nam.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured