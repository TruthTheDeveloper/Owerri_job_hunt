import Logo from '../../../images/logo.png';
import Image from 'next/image';
const NavBar = () => {
    return(
        <nav className="bg-white flex py-4 ">
            <h1 className="text-4xl font-bold ml-2 ">Owerri <span className="text-green-700" >JobHunt</span></h1>

            <ul className="ml-auto flex text-lg mr-16 font-semibold ">
                <li className="mx-3 hover:text-green-700"><a href="#">Home</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#">About Us</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#">Contact Us</a></li>
                <li className="mx-3 hover:text-green-700"><a href="#">Services</a></li>
            </ul>
        </nav>
    )
}

export default NavBar