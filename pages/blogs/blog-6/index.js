import Image from "next/image";
import Link from "next/link";
import screen18 from "../../../src/assets/images/screen18.png"
import screen19 from "../../../src/assets/images/screen19.png"
import screen21 from "../../../src/assets/images/screen21.png"
import screen20 from "../../../src/assets/images/aivid.gif"


const blog6 = () => {
    return (
      <>
      <section className="blog6 blog-component container">
        <div className="header">
            <h1>AI Creation. Computer paddle.</h1>
            <p>Create a Compute paddle or AI.</p>
            <span>Time: 04.12.22</span>
        </div>
        <ul>
            <li>
                <p>If the ball is dot y is less than our paddle's position well then we will move down instead vector two dot down times our speed so direction time speed and if they are perfectly equal if the positions are perfectly equal, then we don't need to move at all so that's why I could have just done else but in this case like if there's if those positions are the same I don't want to do anything so that's that logic. </p>
                <div className="img-wrapper">
                    <Image src={screen18}/>
                </div>
            </li>
            <li>
                <p>Current position is greater than zero well that means we need to move the paddle down so if it's greater than zero is going to be that center point if it's greater than zero that means we're above and we need to move down to go towards the center and same thing here multiply by speed and if it our current position is less than zero which means we're below that center line.</p>
                <div className="img-wrapper">
                    <Image src={screen19}/>
                </div>
            </li>
            <li>
                <p>Computer paddle is sort of tracking it and now look notice how it's just kind of hovering in the middle there because the ball is going away from it and it's going to reset back to the center it's going to kind of just hover there so it actually gives it a little bit of a natural movement it just kind of feels like it's sort of like sitting there like anticipating.</p>
                <div className="img-wrapper">
                        <Image src={screen20}/>
                </div>
            </li>
            <li>
                <p>Creating a function to speed up the process during the game and make the game more difficult step by step.</p>
                <div className="img-wrapper">
                        <Image src={screen21}/>
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
  export default blog6;