import Logo from '../../../images/logo.png';
import Image from 'next/image';
import hambuger from '../../../images/menu.png';
import close from '../../../images/close.png';
import { useState } from 'react';
const NavBar = () => {

    const [open , setOpen] = useState(false)

    return(
        <>
        <nav className="bg-white flex flex-col lg:flex-row py-4 fixed w-full z-20 overflow-hidden">
            <div className="flex">
                <h1 className="lg:text-4xl text-3xl font-bold ml-2 ">Owerri <span className="text-green-700" >JobHunt</span></h1>

                {
                    open ? <div className="ml-auto mr-4 cursor-pointer lg:hidden" onClick={() =>setOpen(prev => !prev)} >
                    <Image src={close} width={30} height={30}/>
                </div>:
                <div className="ml-auto mr-4 cursor-pointer lg:hidden"  onClick={() =>setOpen(prev => !prev)}>
                    <Image src={hambuger} width={40} height={40}/>
                </div>

                }
            </div>

            <ul className="hidden ml-auto lg:flex lg:text-lg lg:mr-16 font-semibold ">
                <li className="mx-3 hover:text-green-700"><a href="#">Home</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#">About Us</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#">Contact Us</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#">Services</a></li>
            </ul>
            {open && <div className="h-28 text-black my-6 ">
            <ul className=" flex flex-col text-lg lg:mr-16 font-bold text-md  ">
                    <li className="my-1 ml-3 hover:text-green-700"><a href="#">Home</a></li>
                    <li className="my-1 ml-3 hover:text-green-700"><a href="#">About Us</a></li>
                    <li className="my-1 ml-3 hover:text-green-700"><a href="#">Contact Us</a></li>
                    <li className="my-1 ml-3 hover:text-green-700"><a href="#">Services</a></li>
                </ul> 
            </div>}
        </nav>
        
        </>

    )
}

export default NavBar