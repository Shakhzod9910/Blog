import Image from "next/image";
import Link from "next/link";
import screen14 from "../../../src/assets/images/screen14.png"
import screen15 from "../../../src/assets/images/screen15.png"
import screen16 from "../../../src/assets/images/video.gif"
import screen17 from "../../../src/assets/images/screen17.png"


const blog5 = () => {
    return (
      <>
      <section className="blog5 blog-component container">
        <div className="header">
            <h1>Scripting our ball.</h1>
            <p>Here we script our ball for responsive movement.</p>
            <span>Time: 24.11.22</span>
        </div>
        <ul>
            <li>
                <p>First of all we create script for ball whoch is called ball.</p>
                <div className="img-wrapper">
                <div className="blog-img">
                    <Image src={screen14}/>
                    </div>
                </div>
            </li>
            <li>
                <p>We created this function for ball movement</p>
                <div className="img-wrapper">
                    <Image src={screen15}/>
                </div>
            </li>
            <li>
                <p>Ball their speed is 200 let's play the game and there we go it went up we'll have to fix that notice how as soon as it collided it just went flat we will fix that next but it is working.</p>
                <div className="img-wrapper">
                        <Image src={screen16}/>
                </div>
            </li>
            <li>
                <p>We can add this to our ball so if we select our ball we go to the rigid body and here you can actually see you can provide a physics material to this let's apply that let's try it again now look at that so now our ball bounces so what this is doing is the physics material is going to determine how when two objects collide.</p>
                <div className="img-wrapper">
                <div className="blog-img">
                        <Image src={screen17}/>
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
  export default blog5;