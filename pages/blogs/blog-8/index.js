import Image from "next/image";
import Link from "next/link";
import screen26 from "../../../src/assets/images/screen26.png"
import screen27 from "../../../src/assets/images/screen27.png"
import screen28 from "../../../src/assets/images/screen28.png"
import screen29 from "../../../src/assets/images/screen29.png"
import pong from "../../../src/assets/images/project1.gif"



const blog8 = () => {
    return (
      <>
      <section className="blog8 blog-component container">
        <div className="header">
            <h1>Set score counter</h1>
            <p>Making UI and score counter function.</p>
            <span>Time: 03.01.23</span>
        </div>
        <ul>
            <li>
                <p>We created counter UI</p>
                <div className="img-wrapper">  
                    <Image src={screen26}/>
                </div>
            </li>
            <li>
                <p></p>
                <div className="img-wrapper">
                    <Image src={screen27}/>
                </div>
            </li>
            <li>
                <p></p>
                <div className="img-wrapper">
                        <Image src={screen28}/>
                </div>
            </li>
            <li>
                <p></p>
                <div className="img-wrapper">
                        <Image src={screen29}/>
                </div>
            </li>
            <li>
                <p>Here you can see that avrything works</p>
                <div className="img-wrapper">
                        <Image src={pong}/>
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
  export default blog8;