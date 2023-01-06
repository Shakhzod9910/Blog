import Image from "next/image";
import Link from "next/link";
import screen1 from "../../../src/assets/images/buttons.jpg"
import screen2 from "../../../src/assets/images/ws.png"
import pong from "../../../src/assets/images/project1.gif"


const blog2 = () => {
    return (
      <>
      <section className="blog2 blog-component container">
        <div className="header">
            <h1>Game</h1>
            <p>Game preview</p>
            <span>Time: 19.11.22</span>
        </div>
        <ul>
            <li>
                <p>You can play this game using up and down buttons. This is one of the way to play tis game.</p>
                <div className="img-wrapper">
                <div className="blog-img">
                    <Image src={screen1}/>
                </div>
                </div>
            </li>
            <li>
                <p>Those are another case to play this game by s and w buttons.</p>
                <div className="img-wrapper">
                <div className="blog-img">
                    <Image src={screen2}/>
                </div>
                </div>
            </li>
            <li>
                <p>You can play this game like this</p>
                <div className="img-wrapper">
                    <div className="blog-img">
                        <Image src={pong}/>
                    </div>
                </div>
            </li>
            
        </ul>
        

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
  export default blog2;