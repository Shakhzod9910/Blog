import Image from "next/image";
import Link from "next/link";
import screen1 from "../../../src/assets/images/screen1.png"
import screen2 from "../../../src/assets/images/screen2.jpg"
import screen3 from "../../../src/assets/images/screen3.png"
import screen4 from "../../../src/assets/images/screen4.png"
import screen5 from "../../../src/assets/images/screen5.png"
import screen6 from "../../../src/assets/images/screen6.jpg"
import screen7 from "../../../src/assets/images/screen7.png"
import screen8 from "../../../src/assets/images/screen8.jpg"
import screen9 from "../../../src/assets/images/screen9.jpg"
const blog1 = () => {
    return (
      <>
      <section className="blog1 blog-component container">
        <div className="header">
            <h1>Scene Setup</h1>
            <p>Blog setting the scene for the game of Pong. There you will find the first step of creating and designing a project.</p>
            <span>Time: 12.11.22</span>
        </div>
        <ul>
            <li>
                <p>To begin we need to create a new unity project and create a new one using this blue button in the top right and you actually can select the drop down here to choose a specific version of unity you want to use. </p>
                <div className="img-wrapper">
                    <Image src={screen1}/>
                </div>
            </li>
            <li>
                <p>We can actually choose a template that we will work off of in this case we're going to choose the 2d template this is going to be a 2d version of pong what that is going to do is install a number of useful 2d packages that you might utilize when making a 2d.</p>
                <div className="img-wrapper">
                    <Image src={screen2}/>
                </div>
            </li>
            <li>
                <p>Next let's go ahead and create a ball game object we can right click in our hierarchy and we can either select create empty which will create a new game object with no components on it or in this case it's easier to select 2d object sprites and we can do square this will create us a brand new game object here. </p>
                <div className="img-wrapper">
                    <Image src={screen3}/>
                </div>
            </li>
            <li>
                <p>You can see this green outline here which is showing the basically the collision area of this object now i just want to keep the size to one all their default values so it exactly aligns with our ball there and that's it. </p>
                <div className="img-wrapper">
                    <Image src={screen4}/>
                </div>
            </li>
            <li>
                <p>Making player paddle. </p>
                <div className="img-wrapper">
                    <Image src={screen5}/>
                </div>
            </li>
            <li>
                <p>Making computer paddle. </p>
                <div className="img-wrapper">
                    <Image src={screen6}/>
                </div>
            </li>
            <li>
                <p>The process of creating the walls surrounding the area. </p>
                <div className="img-wrapper">
                    <Image src={screen7}/>
                </div>
            </li>
            <li>
                <p>Creating a line separating the player and computer paddle area. </p>
                <div className="img-wrapper">
                    <Image src={screen8}/>
                </div>
            </li>
            <li>
                <p>The process of designating the resulting line. </p>
                <div className="img-wrapper">
                    <Image src={screen9}/>
                </div>
            </li>
        </ul>
        <div className="reference">
        <h1>References</h1>
            <div className="links">
            <a href="https://learn.unity.com/tutorial/scene-setup-for-tanks?uv=5.x&projectId=5c5149c5edbc2a001fd5be95#5c7f8528edbc2a002053b6fb">https://learn.unity.com/tutorial/scene-setup-for-tanks?uv=5.x&projectId=5c5149c5edbc2a001fd5be95#5c7f8528edbc2a002053b6fb</a>
            <a href="https://learn.unity.com/tutorial/pluggable-ai-with-scriptable-objects#">https://learn.unity.com/tutorial/pluggable-ai-with-scriptable-objects#</a>
            <a href="https://assetstore.unity.com/">https://assetstore.unity.com/</a>
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
  export default blog1;