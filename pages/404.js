import Link  from "next/dist/client/link";

const NotFound = () => {
    return (
        <div className="not-found">
   <h1> Ooooops. </h1>
   <h2> That page cannot be found .</h2>

   <p>Go Back To The <Link href="/"> Return To The Home Page  </Link>  </p>
        </div>
      );
}
 
export default NotFound;