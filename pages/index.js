import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar  from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/dist/client/link'


export default function Home() {
  return (
   <div> 
      

     <h1>HomePage</h1>
     <p> Un paragraphe est une section de texte en prose vouée au développement d'un point particulier souvent au moyen de plusieurs phrases, dans la continuité du précédent et du suivant.</p>
     <p> Un paragraphe est une section de texte en prose vouée au développement d'un point particulier souvent au moyen de plusieurs phrases, dans la continuité du précédent et du suivant.</p>
 
     <a>  <Link href="/ninjas"> See Ninjas Listing </Link>  </a>
    

   
    </div>
  )
}
