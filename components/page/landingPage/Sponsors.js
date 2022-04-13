import Image from "next/image";

// Aos Animation
import AOS from "aos";
import "aos/dist/aos.css";

//React
import {useEffect} from 'react'

//Image
import upskillTv from '../../../images/upskill-Tv.png';
import upskill from '../../../images/upskill-network.png'
import harriet from '../../../images/harriet.png';





const Sponsor = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    return(
        <section className="">
            <h1 className="text-center text-2xl font-semibold my-16">Meet our partners</h1>
            <div className="flex flex-col  justify-center my-8 sm:flex-row bg-slate-800"  style={{backgroundColor:"#001E00"}}>
                <div className="mx-auto " data-aos="fade-left">
                    <Image
                        src={upskill}
                        width={200}
                    height={200}
                    alt="upskill-logo"
                    />
                </div>
                <div className="mx-auto lg:mt-10" data-aos="zoom-in">
                    <Image
                        src={harriet} 
                        width={200}
                        height={200}
                        alt="harriet-logo"
                    />
                </div>
                <div className="mx-auto " data-aos="fade-right">
                <Image
                    src={upskillTv}
                    width={300}
                height={200}
                alt="upskilltv-logog"
                />
                </div>
            </div>
        </section>
    )
}

export default Sponsor;