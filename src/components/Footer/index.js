import Image from "next/image"; 
import Rounded from '../../assets/images/Rounded.png'
import telegram from '../../assets/images/telegram.svg'
import instagram from '../../assets/images/instagram.svg'
import youtube from '../../assets/images/youtube.svg'
import facebookicon from '../../assets/images/facebookicon.svg'
import Link from "next/link";

const Footer = () =>{
    return(
        <footer>
           <div className="footer-wrapper container">
           <div className="logo-wrapper">
                <Image src={Rounded} />
            </div>
                <ul className="footer-links">
                    <li>
                        <span>Services</span>
                        <ul>
                            <li><Link href="/"><a>Web development</a></Link></li>
                            <li><Link href="/"><a>Automated testing</a></Link></li>
                            <li><Link href="/"><a>Mobile app</a></Link></li>
                        </ul>
                    </li>
                    <li>
                        <span>Navigations</span>
                        <ul>
                            <li><Link href="/about"><a>About Us</a></Link></li>
                            <li><Link href="/blogs"><a>Our works</a></Link></li>
                            <li><Link href="/about"><a>Our team</a></Link></li>
                        </ul>
                        </li>
                    <li>                  
                        <span>Email</span>
                        <p>shakhdev9910@gmail.com</p>
                    </li>
                    <li>
                        <span>Contact</span>
                        <p>+998 93 988 81 99</p>
                        <ul className="messengers">
                        <li><a href="https://t.me/shakhzod9910"><Image src={telegram} alt="icon"/></a></li>
                        <li><a href="https://www.instagram.com/shaxzod_9910/"><Image src={instagram} alt="icon"/></a></li>
                        <li><a href="https://www.facebook.com/people/Shaxzod-Boboyorov/100073732266561/"><Image src={facebookicon} alt="icon"/></a></li>
                        </ul>
                    </li>
                </ul>
                
           </div>
        </footer>
    )
}

export default Footer