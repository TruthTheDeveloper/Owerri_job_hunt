import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'

import upskillTv from '../../../images/upskill-Tv.png';
import upskill from '../../../images/upskill-network.png'
import harriet from '../../../images/harriet.png';





const Sponsor = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    return(
        <section className="">
            <h1 className="text-center text-2xl font-semibold my-16">OUR SPONSORS</h1>
            <div className="flex  justify-center my-8" data-aos="zoom-in">
                <Image
                    src={upskill}
                    width={300}
                height={200}
                alt="upskill-logo"
                />
                <div className="lg:pt-24 pt-12 pl-10 ">
                    <Image
                        src={harriet} 
                        width={300}
                        height={200}
                        alt="harriet-logo"
                    />
                </div>
                <Image
                    src={upskillTv}
                    width={400}
                height={200}
                alt="upskilltv-logog"
                />
            </div>
        </section>
    )
}

export default Sponsor;