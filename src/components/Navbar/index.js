import React, { useState, useEffect, useRef } from "react";
import { Tabs, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Rounded from "../../assets/images/Rounded.png";
import RoundedW from "../../assets/images/rounded-white.png";


const { TabPane } = Tabs;
function callback(key) {
  console.log();
}

const Navbar = () => {
  const { pathname } = useRouter();
  const [ theme, setTheme] = useState(false)
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    const path = pathname;
    if (path === "/") {
      setCurrentTab("5");
    } else if (path === "/blogs") {
      setCurrentTab("3");
    } else if (path === "/contact") {
      setCurrentTab("4");
    } else if (path === "/about") {
      setCurrentTab("1");
    }
  });

  const nav = useRef("blue-theme")


  const [logo , setLogo] = useState(Rounded)
  
 useEffect(()=>{
    if (pathname === "/contact") {
      setTheme(true)
    } else {
      setTheme(false)
    }
 },[pathname])

  
  

  return (
    <section ref={nav} className={theme ? "navbar blue-theme":"navbar"}>
      <div className="wrapper navcontainer">
        <div className="logo-wrapper">
          <Link href={"/"}>
            <a><Image src={ theme ? RoundedW : Rounded} /></a>
          </Link>
        </div>
        <div className="nav-wrapper">
              <div className="tabs-wrapper">
              <Tabs activeKey={currentTab} onChange={callback}>
              <TabPane key="5">
              </TabPane>
                <TabPane tab={<Link href="/about"><a className="navlink">About Us</a></Link>} key="1">
                
                </TabPane>
                
                <TabPane tab={<Link href="/blogs"><a className="navlink">Blog</a></Link>} key="3">
                  
                </TabPane>
                <TabPane tab={<Link href="/contact"><a className="navlink">Contact</a></Link>} key="4">
                  
                </TabPane>
              </Tabs>
            </div>
          <div className="user">
          
          </div>
          <Button className="border-31 ligth-btn"><a href="https://shakhzodbek-portfilio.netlify.app/">Portfolio</a></Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
