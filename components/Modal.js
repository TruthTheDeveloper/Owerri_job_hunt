import candidate from '../profile';
import angel from '../images/talents/vitalis.jpg';
import Image from 'next/image';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
const Modal = () => {
    return(
        <section className="fixed top-0 left-0 h-screen w-full z-40 overflow-y-scroll " style={{backgroundColor:'rgba(0, 0, 0, 0.774)'}}>
            <div className="flex  justify-center  my-24 md:mx-24 ">
                <div className=" bg-white flex flex-col md:flex-row pl-24 rounded-md">
                    <div className="flex flex-col mx-auto md:pr-6   md:px-0">
                    
                            <div className="my-4">
                                <Image src={angel} width={200} height={200} layout="fixed" className="rounded-full" />
                            </div>
                        
                        <div className="flex m-2 ">
                            <a href="#"><FontAwesomeIcon size='x' style={{color:"#14A800"}}  icon={faEnvelope} className="w-4 h-4 mx-1 mt-2"  /></a> Henrysempire111@gmail.com
                        </div>
                        <div className="flex m-2 ">
                            <a href="#"><FontAwesomeIcon size='x' style={{color:"#14A800"}}  icon={faPhone} className="w-4 h-4 mx-1 mt-1 "  /></a> +(234) 70 19035442
                        </div>
                        <div className="flex m-2 w-64 ">
                            <a href="#"><FontAwesomeIcon size='x' style={{color:"#14A800"}}  icon={faAddressCard} className="w-4 h-4 mx-1 mt-1"  /></a>no 1 ojwku street of cherbuim junction beside UBA Bank
                        </div>
                        <div className="flex m-2 text-center  ">
                            <a href="#"><FontAwesomeIcon size='x' style={{color:"#14A800"}}  icon={faLocation} className="w-4 h-4 mx-1 mt-1"  /></a> Owerri Imo state
                        </div>
                        <button className="py-4 text-white w-48 ml-8 text-xl rounded-md my-12" style={{backgroundColor:"#14A800"}}>Hire Talent</button>
                    </div>
                    <div className="mx-auto">
                        <div className=" ">
                            <h1 className=" text-4xl sm:text-5xl  m-4 text-center md:text-left">{candidate[0].name}</h1>
                            <h2 className="text-3xl m-4 text-center">{candidate[0].skill}</h2>

                            <div className="flex items-center justify-center">
                            <div className="border-2 bg-black h-0 p-0 border-black w-12"></div> 
                            <p className="text-center text-lg inline mx-2 ">About Me</p>
                            <div className="border-2 bg-black h-0 p-0 border-black w-12"></div>
                            </div>
                            <div className="w-96 mt-4 px-8 sm:mx-8 md:px-0 md:mx-0">
                                <p>Hi i am {candidate[0].name} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u</p>
                            </div>
                            <div className="flex items-center justify-center mt-10">
                            <div className="border-2 bg-black h-0 p-0 border-black w-12"></div> 
                            <p className="text-center text-lg inline mx-2 ">Connect</p>
                            <div className="border-2 bg-black h-0 p-0 border-black w-12"></div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8 mb-8 md:mb-0">
                            <a href="#"><FontAwesomeIcon size='3x' style={{color:"#14A800"}}  icon={faTwitter} className="w-10 h-10 mx-1 "  /></a>
                            <a href="#"><FontAwesomeIcon size='3x' style={{color:"#14A800"}}  icon={faFacebook} className="w-10 h-10 mx-1 "  /></a>
                            <a href="#"><FontAwesomeIcon size='3x' style={{color:"#14A800"}}  icon={faLinkedin} className="w-10 h-10 mx-1 "  /></a>
                            <a href="#"><FontAwesomeIcon size='3x' style={{color:"#14A800"}}  icon={faInstagram} className="w-10 h-10 mx-1 "  /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal;