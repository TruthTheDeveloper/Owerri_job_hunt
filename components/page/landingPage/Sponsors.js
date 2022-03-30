import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'
import sponsor1 from '../../../images/sponsor1.jpg';
import sponsor2 from '../../../images/sponsor2.jpg';
import sponsor3 from '../../../images/sponsor3.png';
import sponsor4 from '../../../images/sponsor4.jpg';
import sponsors4 from '../../../images/sponsors4.png';
import sponsor5 from '../../../images/sponsor5.jpg';
import sponsor6 from '../../../images/sponsor6.png';
import sponsor7 from '../../../images/sponsor7.png';
import sponsor8 from '../../../images/sponsor8.png';
import sponsor9 from '../../../images/sponsor9.jpg';
import sponsor10 from '../../../images/sponsor10.png';
import sponsor12 from '../../../images/sponsor12.png';
import sponsor13 from '../../../images/sponsor13.png';
import sponsor14 from '../../../images/sponsor14.png';




const Sponsor = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    return(
        <section className="mb-48">
            <h1 className="text-center text-2xl font-semibold my-16">OUR SPONSORS</h1>
            <div className="flex justify-center my-8" data-aos="zoom-in">
                <Image
                    src={sponsor1}
                    width={100}
                height={100}
                />
                <Image
                    src={sponsor2} 
                    width={100}
                    height={100}
                />
                <Image
                    src={sponsor3}
                    width={100}
                height={100}
                />
                <Image
                    src={sponsor4}
                    width={100}
                height={100}
                />
                <Image
                    src={sponsor5}
                    width={100}
                height={100}
                />
                <Image
                    src={sponsor7}
                    width={100}
                height={100}
                />
                <Image
                    src={sponsor8}
                    width={100}
                height={100}
                />
                <Image
                    src={sponsor9}
                    width={100}
                height={100}
                />
                <Image
                    src={sponsor14}
                    width={100}
                    height={100}
                />
                
            </div>
            <div className="flex justify-center" data-aos="zoom-in">
                <Image
                src={sponsor10}
                width={100}
                height={100}
                />
                <Image
                src={sponsors4}
                width={100}
                height={100}
                />
                <Image
                    src={sponsor6}
                    width={100}
                    height={100}
                />
                <Image
                    src={sponsor12}
                    width={100}
                    height={100}
                />
                <Image
                    src={sponsor13}
                    width={100}
                    height={100}
                />
            </div>
        </section>
    )
}

export default Sponsor;