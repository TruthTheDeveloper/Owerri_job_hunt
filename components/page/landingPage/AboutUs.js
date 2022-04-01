import Image from "next/image";
import Woman from '../../../images/woman.jpeg';
import { useEffect } from "react";
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
                    <h1 className="md:text-xl mt-4">THIS PROJECT IS BROUGHT TO YOU BY UPSKILL NETWORK</h1>
                    <h1 className="md:text-2xl text-xl mt-8">Upskill Network is a team of didgital skill experts facilitating digital transformation accross Nigeria through inclusive digital literacy training programs, buisness incubation and support, consulting and partnership with other government agency</h1>
                    <button className="my-5 rounded-md mx-auto flex w-48 h-12 text-xl pl-10 pt-2 text-white" style={{backgroundColor:"#14A800"}}>Learn More</button>
                </div>
                
            </div>

        </section>
    )
}

export default AboutUs;