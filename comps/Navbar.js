import Link from 'next/link'

const Navbar = () => {
    return ( 
        <div> 
     <nav>
            <div className="logo">
                 <h1>Ninja List</h1>
            </div>

            <a>  <Link href="/"> Home   </Link> </a>
            <a> <Link href="/abouts"> About  </Link>  </a>
            <a> <Link href="/ninjas"> Ninja_Listing   </Link> </a>
   </nav>

    
</div>


        

        
     );
}
 
export default Navbar ;