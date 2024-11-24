import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = () =>{
    return(
        <div>
        <div className='sticky top-10 grid gap-y-5 lg:grid-rows-[25%_50%_25%] lg:h-[93vh]'>
        <Header />
        <Navbar />
        <Contact />
        </div>
      </div>
    )
}

export default LeftSection;