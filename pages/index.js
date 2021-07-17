import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar  from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/dist/client/link'


export default function Home() {
  return (
   <div className={styles.container}> 
     <h1 className={styles.title}> Home Page</h1>
     <p className={styles.text}>   Un paragraphe est une section de texte en prose vouée au développement d'un point particulier souvent au moyen de plusieurs phrases, dans la continuité du précédent et du suivant.</p>
     <p className={styles.text}>   Un paragraphe est une section de texte en prose vouée au développement d'un point particulier souvent au moyen de plusieurs phrases, dans la continuité du précédent et du suivant.</p>
  
     <a className={styles.btn}>  <Link href="/ninjas"> See Ninjas Listing </Link>  </a> 

    </div>
  )
}
