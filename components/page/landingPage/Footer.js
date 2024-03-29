import Image from 'next/image';
import Link from 'next/link';

//font awesome
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//image
import upskill from '../../../images/upskill-network.png';
import jobhunt from '../../../images/job hunt.png';


const Footer = () => {

    return(
        <footer className="">
            <div className="flex flex-col md:flex-row mt-28">
                <div className="">
                    <Image src={jobhunt} alt="jobhunt"/>
                </div>
                <div className="ml-6 md:ml-24 md:ml-0 mt-16">
                    <div className="text-2xl" style={{color:"#14A800"}}>
                        <h1 className="my-2">Top Skills</h1>
                        <h1 className="my-2">Trending Skills</h1>
                        <h1 className="my-2">Top Skills in Owerri</h1>
                    </div>
                </div>
                <div className="ml-6 md:ml-24 mt-16">
                    <p></p>
                    <div className="">
                        <h1 className="text-xl font-semibold">Contact Us</h1>
                        <h1 className="my-2">+(234) 9023436227</h1>
                        <h1 className="my-2">no1 ojwku street of cherbuim junction beside UBA Bank</h1>
                        <h1 className="my-2">Top Skills in Owerri</h1>
                    </div>
                </div>
                <div className="ml-6 md:ml-24 mt-16">
                    <p></p>
                    <div className="">
                        <h1 className="text-xl font-semibold">Why Job Hunt</h1>
                        <h1 className="my-2">Proof of Quality</h1>
                        <h1 className="my-2">connect</h1>
                        <h1 className="my-2">Safe and Secure</h1>
                    </div>
                </div>
                <div className="ml-6 md:ml-24 mt-16">
                    <p></p>
                    <div className="">
                        <h1 className="text-xl font-semibold">Proudly Powered by</h1>
                        <Image src={upskill} width={150} height={150} alt="jobhunt-logo"/>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <div className="flex">
                    {/* -----DONT FORGET TO UPDATE OWERRI JOBHUNT WHEN YOU GET THIS DETAIL----> */}
                <h1 className="text-xl md:mx-8 mr-4 ml-2 font-semibold">Follow Us</h1>
                    <a href="#"><FontAwesomeIcon size='3x' style={{color:"#14A800"}}  icon={faTwitter} className="w-10 h-10 mx-1 "  /></a>
                    <Link href="https://www.facebook.com/111700191454717/"><FontAwesomeIcon size='3x' style={{color:"#14A800"}}  icon={faFacebook} className="w-10 h-10 mx-1 "  /></Link>
                    <a href="#"><FontAwesomeIcon size='3x' style={{color:"#14A800"}}  icon={faLinkedin} className="w-10 h-10 mx-1 "  /></a>
                    <Link href="https://instagram.com/upskill_network?utm_medium=copy_link"><FontAwesomeIcon size='3x' style={{color:"#14A800"}}  icon={faInstagram} className="w-10 h-10 mx-1 "  /></Link>
                </div>
            </div>
            <hr className="border border-green-500" style={{color:"#14A800"}}/>
            <h1  className="text-center text-lg my-8">@Copyright 2022 all right reserved upskill network limited</h1>
        </footer>
    )
}

export default Footer;