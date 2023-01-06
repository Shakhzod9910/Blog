import Image from "next/image";
import Link from "next/link";
import screen22 from "../../../src/assets/images/screen22.png"
import screen23 from "../../../src/assets/images/screen23.png"
import screen24 from "../../../src/assets/images/screen24.png"
import screen25 from "../../../src/assets/images/ai2.gif"


const blog7 = () => {
    return (
      <>
      <section className="blog7 blog-component container">
        <div className="header">
            <h1>Game manager</h1>
            <p>Creating a game account management function</p>
            <span>Time: 12.12.22</span>
        </div>
        <ul>
            <li>
                <p>We create a game manager file</p>
                <div className="img-wrapper">
                <div className="blog-img">
                    <Image src={screen22}/>
                    </div>
                </div>
            </li>
            <li>
                <p>We're going to want to keep track of score so player score and computer score and we might want to or one player or the other scored. Player scores computer scores and the obvious code here is the score increases for each respectively we also want another function for resetting the ball basically um we'll reset the position of the ball anytime somebody scores.</p>
                <div className="img-wrapper">
                    <Image src={screen23}/>
                </div>
            </li>
            <li>
                <p>We can say position equals zero I also want to change the velocity because the velocity is actually increasing over time so we'll also set that to be zero reset position and then when the position is reset.</p>
                <div className="img-wrapper">
                        <Image src={screen24}/>
                </div>
            </li>
            <li>
                <p>Here you can see the result.</p>
                <div className="img-wrapper">
                        <Image src={screen25}/>
                </div>
            </li>
            
        </ul>
        <div className="reference">
        <h1>References</h1>
            <div className="links">
            <a href="https://learn.unity.com/tutorial/scene-setup-for-tanks?uv=5.x&projectId=5c5149c5edbc2a001fd5be95#5c7f8528edbc2a002053b6fb">https://learn.unity.com/tutorial/scene-setup-for-tanks?uv=5.x&projectId=5c5149c5edbc2a001fd5be95#5c7f8528edbc2a002053b6fb</a>
            <a href="https://learn.unity.com/tutorial/pluggable-ai-with-scriptable-objects#">https://learn.unity.com/tutorial/pluggable-ai-with-scriptable-objects#</a>
            <a href="https://assetstore.unity.com/">https://assetstore.unity.com/</a>
            <a href="https://dotnet.microsoft.com/es-es/live/csharpfritz">https://dotnet.microsoft.com/es-es/live/csharpfritz</a>
            <a href="https://learn.microsoft.com/ru-ru/dotnet/csharp/programming-guide/interop/example-com-class">https://learn.microsoft.com/ru-ru/dotnet/csharp/programming-guide/interop/example-com-class</a>

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
  export default blog7;