import { Button } from "antd"
import Image from "next/image"
import bcg from '../../assets/images/bcg.svg'

const Visitbox = () =>{
    return(
        <>
      <div className="visit-box border-10">
            <div className="bcg bcg-img-2"><Image src={bcg}/></div>
            <span className="header">Work with us</span>
            <h1>Have an idea in mind?</h1>
            <p>If you have an idea, contact us and bring it to life.</p>
            <Button className="light-btn" type="primary">Let’s talk</Button>
            <div className="bcg bcg-img-1"><Image src={bcg}/></div>
        </div>
        </>
        
    )
}
export default Visitbox