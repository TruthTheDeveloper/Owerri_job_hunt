import Image from "next/image";
//Image
import Woman from '../../../images/woman.jpeg';
//react
import { useEffect } from "react";

//Animation
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
      
    return(
        <section id="about-us" className="my-48" >
            <h1 className="text-center text-4xl font-semibold my-8">About Us</h1>
            <div className="flex lg:w-7/12 lg:mx-auto shadow-lg rounded-lg" style={{backgroundColor:"#F2F7F2"}} data-aos="fade-right">
                <div className="hidden md:block">
                    <Image src={Woman} height={1800} width={1500} alt="aboutus"/>
                </div>
                <div className=" mx-5 " style={{color:"#001E00"}}>
                    <h1 className="md:text-lg my-8">THIS PROJECT IS BROUGHT TO YOU BY UPSKILL NETWORK</h1>
                    <h1 className="md:text-xl text-lg mt-8">Upskill Network is a team of digital skill experts facilitating digital transformation accross Nigeria through inclusive digital literacy training programs, buisness incubation and support, consulting and partnership with other government agency</h1>
                    <button className="md:mt-24 my-12 rounded-md mx-auto flex w-48 h-12 text-xl pl-10 pt-2 text-white" style={{backgroundColor:"#14A800"}}>Learn More</button>
                </div>
                
            </div>

        </section>
    )
}

export default AboutUs;