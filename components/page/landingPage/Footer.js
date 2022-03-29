
import jobhunt from '../../../images/job hunt.png'
import Image from 'next/image'

const Footer = () => {

    return(
        <footer className="footer" style={{height:'30rem', backgroundImage:"url(../../../images/Job Hunt 3.png)"}}>
            <div className="flex">
                <div className="mt-28">
                    <Image src={jobhunt}/>
                </div>
                <div>

                </div>
            </div>
            <h1  className="text-center text-white text-lg">Copyright 2022 all right reserved</h1>
        </footer>
    )
}

export default Footer;