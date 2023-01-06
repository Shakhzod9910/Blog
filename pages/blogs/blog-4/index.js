import Image from "next/image";
import Link from "next/link";
import screen10 from "../../../src/assets/images/screen10.png"
import screen11 from "../../../src/assets/images/screen11.png"
import screen12 from "../../../src/assets/images/screen12.png"
import screen13 from "../../../src/assets/images/screen13.png"


const blog4 = () => {
    return (
      <>
      <section className="blog4 blog-component container">
        <div className="header">
            <h1>Settings for player paddle</h1>
            <p>Create settings for the player and run them.</p>
            <span>Time: 21.11.22</span>
        </div>
        <ul>
            <li>
                <p>Create a script just called paddle and if you didn't catch that you can right click um in the project panel create and c-sharp script we have one called paddle let's go ahead and add another called player paddle and let's go ahead and actually create another one called computer paddle. </p>
                <div className="img-wrapper">
                    <Image src={screen10}/>
                </div>
            </li>
            <li>
                <p>Next let's add another function called fixed update so the difference between these two is that as I mentioned earlier update is called every single frame the game is running fixed update rather is called at a fixed time interval so fixed update is very much associated with physics if the physics code was executed or was based upon the frame.</p>
                <div className="img-wrapper">
                    <Image src={screen11}/>
                </div>
            </li>
            <li>
                <p>Ths is the function that for direction speed an movement for the player paddle.</p>
                <div className="img-wrapper">
                <div className="blog-img">
                        <Image src={screen12}/>
                        </div>
                </div>
            </li>
            <li>
                <p>Ths is setting in unity for speed.</p>
                <div className="img-wrapper">
                <div className="blog-img">
                        <Image src={screen13}/>
                        </div>
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
  export default blog4;