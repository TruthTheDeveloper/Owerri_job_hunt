
import jobhunt from '../../../images/job hunt.png';
import Image from 'next/image';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    return(
        <footer className="">
            <div className="flex mt-28">
                <div className="">
                    <Image src={jobhunt}/>
                </div>
                <div className="mt-16">
                    <div className="text-2xl" style={{color:"#14A800"}}>
                        <h1 className="my-2">Top Skills</h1>
                        <h1 className="my-2">Trending Skills</h1>
                        <h1 className="my-2">Top Skills in Owerri</h1>
                    </div>
                </div>
            </div>
            <div className="flex">
                <h1>Follow Us</h1>
                <span className="mx-4"><FontAwesomeIcon icon={faTwitterSquare} size="3x" /></span>
            </div>
            <hr className="border border-green-500" style={{color:"#14A800"}}/>
            <h1  className="text-center text-lg my-8">Copyright 2022 all right reserved</h1>
        </footer>
    )
}

export default Footer;