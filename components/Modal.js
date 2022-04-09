// next js import 
import Image from 'next/image';
import Link from 'next/link';

// font awesome 
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

const Modal = ({name, skill, image,speech, closeModal}) => {
    console.log('this modal pops')


    return(
        <section className="fixed top-0 left-0 h-screen w-full z-40 overflow-y-scroll " style={{backgroundColor:'rgba(0, 0, 0, 0.774)'}}>
            <div className="flex  justify-center  my-24 md:mx-24 ">
                <div className=" bg-white flex flex-col md:flex-row pl-24 rounded-md">
                    <div className="flex flex-col ml-32 md:mx-auto md:ml-0 md:pr-6   md:px-0">
                    <FontAwesomeIcon  style={{color:"#14A800"}}  icon={faClose} className="w-5 h-5 ml-96 mr-4 mt-2 md:hidden cursor-pointer" onClick={closeModal} />
                            <div className="my-4">
                                <Image src={image} width={200} height={200} layout="fixed" className="rounded-full" />
                            </div>
                        
                        <div className="flex m-2 ">
                            <a href="#"><FontAwesomeIcon  style={{color:"#14A800"}}  icon={faEnvelope} className="w-4 h-4 mx-1 mt-2"  /></a> Henrysempire111@gmail.com
                        </div>
                        <div className="flex m-2 ">
                            <a href="#"><FontAwesomeIcon  style={{color:"#14A800"}}  icon={faPhone} className="w-4 h-4 mx-1 mt-1 "  /></a> +(234) 70 19035442
                        </div>
                        <div className="flex m-2 w-64 ">
                            <a href="#"><FontAwesomeIcon  style={{color:"#14A800"}}  icon={faAddressCard} className="w-4 h-4 mx-1 mt-1"  /></a>no 1 ojwku street of cherbuim junction beside UBA Bank
                        </div>
                        <div className="flex m-2 text-center  ">
                            <a href="#"><FontAwesomeIcon  style={{color:"#14A800"}}  icon={faLocation} className="w-4 h-4 mx-1 mt-1"  /></a> Owerri Imo state
                        </div>
                        <Link href="/candidate/register">
                            <button className="py-4 text-white w-48 ml-8 text-xl rounded-md my-12" style={{backgroundColor:"#14A800"}}>Hire Talent</button>
                        </Link>
                    </div>
                    <div className="mx-auto">
                        <div className=" ">
                            <FontAwesomeIcon size='x' style={{color:"#14A800"}}  icon={faClose} className="w-4 h-4 ml-96 mr-4 mt-2 hidden md:block cursor-pointer" onClick={closeModal}  />
                            <h1 className=" text-4xl sm:text-5xl  m-4 text-center md:text-left">{name}</h1>
                            <h2 className="text-3xl m-4 text-center">{skill}</h2>

                            <div className="flex items-center justify-center">
                            <div className="border-2 bg-black h-0 p-0 border-black w-12"></div> 
                            <p className="text-center text-lg inline mx-2 ">About Me</p>
                            <div className="border-2 bg-black h-0 p-0 border-black w-12"></div>
                            </div>
                            <div className="w-96 mt-4 px-8 sm:mx-8 md:px-0 md:mx-0">
                                <p>{speech}</p>
                            </div>
                            <div className="flex items-center justify-center mt-10">
                            <div className="border-2 bg-black h-0 p-0 border-black w-12"></div> 
                            <p className="text-center text-lg inline mx-2 ">Connect With Me</p>
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