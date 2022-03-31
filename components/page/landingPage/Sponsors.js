import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'

import upskillTv from '../../../images/upskill-Tv.png';
import upskill from '../../images/upskill-network.png';
import harriet from '../../images/harriet.png';





const Sponsor = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    return(
        <section className="mb-48">
            <h1 className="text-center text-2xl font-semibold my-16">OUR SPONSORS</h1>
            <div className="flex justify-center my-8" data-aos="zoom-in">
                <Image
                    src={upskill}
                    width={100}
                height={100}
                />
                <Image
                    src={harriet} 
                    width={100}
                    height={100}
                />
                <Image
                    src={upskillTv}
                    width={100}
                height={100}
                />
            </div>
        </section>
    )
}

export default Sponsor;