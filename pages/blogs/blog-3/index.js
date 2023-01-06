import Image from "next/image";
import Link from "next/link";
import mico from "../../../src/assets/images/Miko.jpg"
import ai from "../../../src/assets/images/airobot.jpg"
import robot from "../../../src/assets/images/Robot.png"


const blog3 = () => {
    return (
      <>
      <section className="blog3 blog-component container">
        <div className="header">
            <h1>Miko</h1>
            <p>Miko is another personal robot that is proved to be helpful and diverse in the field of learning.</p>
            <span>Time: 21.11.22</span>
        </div>
        <ul>
            <li>
                <p>Miko has come up with a Miko 3 robot that, by using artificial intelligence, promotes learning and educates as well as entertains kids. It shows and reacts to your emotions the same way a living being would respond to them. Miko can dance, crack a joke, and enlighten your mood. </p>
                <div className="img-wrapper">
                <div className="blog-img">
                    <Image src={mico}/>
                </div>
                </div>
            </li>
            <li>
                <p>The more you spend time with Miko, the more it will know you and vice versa. It will adapt according to your requirements. Moreover, Miko is secured and gives you the private space you deserve. It also gives you limitless access to video calls so that the parent is never far away from their kid and can always keep track of the kid’s emotional growth. </p>
                <div className="img-wrapper">
                <div className="blog-img">
                    <Image src={ai}/>
                </div>
                </div>
            </li>
            <li>
                <p>A Vector Robot is a state-of-the-art artificial intelligence robot. It is more than just your friend. It is independent and can provide you with all the information you ask for. The Vector Robot can sense the surroundings and dodge obstacles and provide you with weather updates and take photos with its unique sensors. It has four microphones and can detect the direction from where the sound is coming. It can even set a timer if you do not want to reach your office late or eat overcooked food. Vector Robot uses advanced technology to cope with users’ needs. It only requires a small space to accommodate itself and get charged up. This one is meant to be an active robot that roams around freely in your surroundings. Just by saying “Hey Vector,” it will answer your questions and obey your commands.</p>
                <div className="img-wrapper">
                    <div className="blog-img">
                        <Image src={robot}/>
                    </div>
                </div>
            </li>
            
        </ul>
        <div className="reference">
        <h1>References</h1>
            <div className="links">
            <a href="https://miko.ai/">https://miko.ai/</a>
            <a href="https://www.digitaldreamlabs.com/products/vector-robot">https://www.digitaldreamlabs.com/products/vector-robot</a>
            <a href="https://geekflare.com/best-personal-robots/">https://geekflare.com/best-personal-robots/</a>
            </div>
        </div>
        

        <Link href={"/blogs"}><a className="back">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12L5 12"   />
                    <path d="M9 8L5 12"  />
                    <path d="M9 16L5 12"  />
                    </svg>
            Back to blogs</a></Link>
      </section>
   
      </>
    );
  };
  export default blog3;