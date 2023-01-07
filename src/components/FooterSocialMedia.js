import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,   } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
export default function FooterSocialMedia(){
    return(
        <>
            <div className="socialMediaLinksFooter">

                <h4>Social Media Links</h4>
                <br/>
                <span> <a href="#"> <FontAwesomeIcon icon={faFacebook} /> </a> </span>
                <span> <a href="#"> <FontAwesomeIcon icon={faTwitter} /> </a> </span>
                <span> <a href="#"> <FontAwesomeIcon icon={faGooglePlus} /> </a> </span>


            </div>
        </>
    )
}