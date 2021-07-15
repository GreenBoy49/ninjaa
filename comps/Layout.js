import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div> 
              
            <Navbar></Navbar>
            {children} 
     {/* children is this <Component {...pageProps} /> */} 
     <Footer></Footer>
    
     </div>
     );
}
 
export default Layout;