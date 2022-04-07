import Logo from '../../../images/logo.png';
import Image from 'next/image';
import hambuger from '../../../images/menu.png';
import close from '../../../images/close.png';
import { useState } from 'react';
import Link from 'next/link';



const NavBar = () => {

    const [open , setOpen] = useState(false)

    return(
        <>
        <nav className="bg-white flex flex-col lg:flex-row py-4 fixed w-full z-20 overflow-hidden">
            <div className="flex">
                <Link href="/"><h1 className="lg:text-4xl text-3xl font-bold ml-2 ">Owerri <span className="font-bold " style={{color:"#14A800"}} >JobHunt</span></h1></Link>

                {
                    open ? <div className="ml-auto mr-4 cursor-pointer lg:hidden" onClick={() =>setOpen(prev => !prev)} >
                    <Image src={close} alt="info" width={30} height={30}/>
                </div>:
                <div className="ml-auto mr-4 cursor-pointer lg:hidden"  onClick={() =>setOpen(prev => !prev)}>
                    <Image src={hambuger} alt="info" width={40} height={40}/>
                </div>

                }
            </div>

            <ul className="hidden ml-auto lg:flex lg:text-lg lg:mr-16 font-semibold">
                <Link href="/">
                    <li className="mx-3 hover:text-green-700"><a href="">Home</a></li>
                </Link>
                <li className="mx-3 hover:text-green-700"><a href="#services">Services</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#about-us">About Us</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#testimonials">Testimonials</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#contact-us">Contact Us</a></li>
                <Link href="/login">
                    <button className="flex text-white px-4 pt-1 rounded-md mr-8" style={{backgroundColor:'#3C8224'}}>
                    Login
                    </button>
                </Link>
            </ul>
            {open && <div className="h-44 text-black my-6  ">
            <ul className=" flex flex-col text-lg lg:mr-16 font-bold text-md ">
            <Link href="/">
                    <li className="mx-3 hover:text-green-700"><a href="">Home</a></li>
                </Link>
                <li className="mx-3 hover:text-green-700"><a href="#services">Services</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#about-us">About Us</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#testimonials">Testimonials</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#contact-us">Contact Us</a></li>
                    <Link href="/login">
                        <button className="flex  text-white px-4 pt-1 rounded-md w-24 ml-2 h-10 pt-2 " style={{backgroundColor:'#3C8224'}}>
                            Login
                        </button>
                    </Link>
                </ul> 
            </div>}
        </nav>
        
        </>

    )
}

export default NavBar