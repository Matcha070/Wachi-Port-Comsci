import { faFacebook, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () =>{
    return(
        <div className='flex items-end pb-10 mx-5'>
          <div className='flex items-end text-2xl gap-7'>
            <a href="https://www.facebook.com/wachirawit.anantaworapong">
            <FontAwesomeIcon icon={faFacebook} color={'gray'} className='transition-all hover:scale-125 hover:text-blue'/>
            </a>
            <a href="https://www.instagram.com/ii_achi__/?hl=th">
            <FontAwesomeIcon icon={faInstagram} color={'gray'} className="transition-all hover:scale-125 hover:text-pink-600"/>
            </a>
          </div>
        </div>
    )
}

export default Contact;