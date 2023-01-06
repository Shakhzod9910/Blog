import Head from "next/head";
import Image from "next/image";
import Partners from "../../src/components/Partners";
import Visitbox from "../../src/components/Visitbox";
import Link from "next/link";
import pong from "../../src/assets/images/project1.gif"
import ws from "../../src/assets/images/buttons.jpg"
import miko from "../../src/assets/images/airobot.jpg"
import screen6 from "../../src/assets/images/screen6.jpg"
import screen22 from "../../src/assets/images/screen22.png"
import screen11 from "../../src/assets/images/screen11.png"
import video from "../../src/assets/images/video.gif"
import aivideo from "../../src/assets/images/aivid.gif"

const Projects = () => {
  return (
    <>
    <section className="projects container">
    <Head>
        <title>Rounded LLC</title>
    </Head>
      <div className="blogs">
        <h1 className="ai-header">AI GAMING BLOG</h1>
        <p className="simple">From simple to complex</p>
          <ul>

            <li>
              <Link href={"/blogs/blog-1"}> 
                <a>
                  <div className="card-wrapper">
                    <Image src={screen6}/>
                    <h1>Scene Setup</h1>
                    <p>Blog setting the scene for the game of Pong. There you will find the first step of creating and designing a project.</p>
                     <div className="more">
                      <span>12.11.22</span>
                      <h5>Read more</h5>
                     </div>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href={"/blogs/blog-2"}> 
                <a>
                  <div className="card-wrapper">
                    <div className="img-ws">
                    <Image src={ws}/>
                    </div>
                    <h1>Game</h1>
                    <p>Game preview</p>
                     <div className="more">
                      <span>19.11.22</span>
                      <h5>Read more</h5>
                     </div>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href={"/blogs/blog-3"}> 
                <a>
                  <div className="card-wrapper">
                    <Image src={miko}/>
                    <h1>Future Ai robots</h1>
                    <p>Miko is another personal robot that is proved to be helpful and diverse in the field</p>
                     <div className="more">
                      <span>21.11.22</span>
                      <h5>Read more</h5>
                     </div>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href={"/blogs/blog-4"}> 
                <a>
                  <div className="card-wrapper">
                    <Image src={screen11}/>
                    <h1>Settings for player paddle</h1>
                    <p>Create settings for the player and run them.</p>
                     <div className="more">
                      <span>21.11.22</span>
                      <h5>Read more</h5>
                     </div>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href={"/blogs/blog-5"}> 
                <a>
                  <div className="card-wrapper">
                    <Image src={video }/>
                    <h1>Scripting our ball.</h1>
                    <p>Here we script our ball for responsive movement.</p>
                     <div className="more">
                      <span>24.11.22</span>
                      <h5>Read more</h5>
                     </div>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href={"/blogs/blog-6"}> 
                <a>
                  <div className="card-wrapper">
                    <Image src={aivideo}/>
                    <h1>AI Creation. Computer paddle.</h1>
                    <p>Create a Compute paddle or AI.</p>
                     <div className="more">
                      <span>04.12.22</span>
                      <h5>Read more</h5>
                     </div>
                  </div>
                </a>
              </Link>
            </li>

            <li>
              <Link href={"/blogs/blog-7"}> 
                <a>
                  <div className="card-wrapper">
                    <Image src={screen22}/>
                    <h1>Game manager</h1>
                    <p>Creating a game account management function</p>
                     <div className="more">
                      <span>12.12.22</span>
                      <h5>Read more</h5>
                     </div>
                  </div>
                </a>
              </Link>
            </li> 
            <li>
              <Link href={"/blogs/blog-8"}> 
                <a>
                  <div className="card-wrapper">
                    <Image src={pong}/>
                    <h1>Set score counter</h1>
                    <p>Making UI and score counter function.</p>
                     <div className="more">
                      <span>12.12.22</span>
                      <h5>Read more</h5>
                     </div>
                  </div>
                </a>
              </Link>
            </li>  

          </ul>
      </div>
    </section>
    <Partners/>
    <Visitbox/>
    </>
  );
};
export default Projects;
