import { Button } from "antd";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Macbook from "../../src/assets/images/Macbook.png";
import APhoto from "../../src/assets/images/aigif.gif";
import Visitbox from "../../src/components/Visitbox";
import ProjectOne from "../../src/assets/images/project1.gif";
import Pong1 from "../../src/assets/images/pong1.png";
import Pong2 from "../../src/assets/images/pong3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Partners from "../../src/components/Partners";


import "swiper/css";
const Main = () => {
  const scrollContainer = (evt) => {
    evt.currentTarget.scrollLeft += evt.deltaY;
    evt.stopPropagation();
  };

  return (
    <section className="home">
      <Head>
        <title>Pong Game</title>
      </Head>
      <div className="home-wrapper container">
        <div className="left-wrapper">
          <span className="aeonik-medium-16 digital">Pong game</span>
          <h1>A GAME OF PONG WITH AI AGAINST HUMAN SKILLS</h1>
          <p>
          In this game you will be able to play against an artificial intelligence pong player.
           He can learn successful moves from you.
          </p>
          
          <h5>From simple to complex</h5>
          
        </div>
        <div className="right-wrapper">
          <div className="img-wrapper">
            <Image src={Macbook} />
          </div>
        </div>
      </div>
      <div className="services">
        <div className="section-wrapper container">
          <span className="min-header">Concept</span>
          <h1 className="header">What is AI?</h1>
          <p className="header-p">
          Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.
           AI is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry. {" "}
           As the hype around AI has accelerated, vendors have been scrambling to promote how their products and services use AI. Often what they refer to as AI is simply one component of AI, such as machine learning. AI requires a foundation of specialized hardware and software for writing and training machine learning algorithms. No one programming language is synonymous with AI, but a few, including Python, R and Java, are popular.

In general, AI systems work by ingesting large amounts of labeled training data, analyzing the data for correlations and patterns, and using these patterns to make predictions about future states. In this way, a chatbot that is fed examples of text chats can learn to produce lifelike exchanges with people, or an image recognition tool can learn to identify and describe objects in images by reviewing millions of examples.</p>
          <div className="ai"><Image src={APhoto}/></div>
        </div>
      </div>
      <div className="works container">
        <div className="left-wrapper">
          <span className="title">Characteristics</span>
          <h1>What it does?</h1>
          <p>
          In this game, a small artificial intelligence was created that responded to human play. 
          Although this mind is simple, it has the ability to respond and learn.
          </p>
          <div className="btn-wrapper">
            <Button type="primary" className="btn-primary">
              <Link href="/blogs"><a className="blog-link">View all blogs</a></Link>
            </Button>
          </div>
        </div>
        <div className="right-wrapper">
          <ul onWheel={scrollContainer}>
          <Swiper
            spaceBetween={40}
            slidesPerView={2.38}
            freeMode={true}
            grabCursor= {true}
            loop= {true}
            // spaceBetween= {40}
            speed= {1000}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <li>
                <div className="item-wrapper">
                <div className="project-img-wrapper">
                  <Image src={Pong1} />
                </div>
                <h2>This is how you start the game</h2>
                <p>Game / Pong</p>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Game process and order</h2>
                <p>Game / Pong</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={Pong2} />
                </div>
                <h2>A situation where the winner and loser are reflected.</h2>
                <p>Game / Pong</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={Pong1} />
                </div>
                <h2>This is how you start the game</h2>
                <p>Game / Pong</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={ProjectOne} />
                </div>
                <h2>Game process and order</h2>
                <p>Game / Pong</p>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li>
                <div className="project-img-wrapper">
                  <Image src={Pong2} />
                </div>
                <h2>A situation where the winner and loser are reflected.</h2>
                <p>Game / Pong</p>
              </li>
            </SwiperSlide>
            
          </Swiper>
          </ul>
       
        </div>
      </div>
      <Partners/>
      <Visitbox/>
    </section>
  );
};
export default Main;
