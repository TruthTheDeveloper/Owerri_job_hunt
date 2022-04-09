// next js
import angel from '../../images/talents/Alex.jpg'
import Image from 'next/image';

//font awesome
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile  = () => {
    return(
        <section className="py-24 ">
            <div className="flex  justify-center  bg-red-200">
                <div className=" bg-green-500 flex flex-row">
                    <div className="flex flex-col">
                        <div className="mr-24 ml-6 my-4 rounded-full bg-yellow-600 overflow-hidden">
                            <Image src={angel} width={200} height={200} alt="angel" />
                        </div>
                        <div className="flex m-2">
                            <a href="#"><FontAwesomeIcon style={{color:"#14A800"}}  icon={faEnvelope} className="w-4 h-4 mx-1 mt-2"  /></a> Henrysempire111@gmail.com
                        </div>
                        <div className="flex m-2">
                            <a href="#"><FontAwesomeIcon  style={{color:"#14A800"}}  icon={faPhone} className="w-4 h-4 mx-1 mt-1 "  /></a> +(234) 70 19035442
                        </div>
                        <div className="flex m-2 w-64">
                            <a href="#"><FontAwesomeIcon  style={{color:"#14A800"}}  icon={faAddressCard} className="w-4 h-4 mx-1 mt-1"  /></a>no 1 ojwku street of cherbuim junction beside UBA Bank
                        </div>
                        <div className="flex m-2">
                            <a href="#"><FontAwesomeIcon  style={{color:"#14A800"}}  icon={faEnvelope} className="w-4 h-4 mx-1 mt-1"  /></a> Henrysempire111@gmail.com
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl  m-4">{candidate[0].name}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;