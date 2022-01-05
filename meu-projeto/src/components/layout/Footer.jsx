import {FaFacebook,FaInstagram, FaTwitch} from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
    return( 
        <footer>
            <ul className={styles.social_list}>
                <li ><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaTwitch/></li>
            </ul>
        </footer>
    )
}

export default Footer
