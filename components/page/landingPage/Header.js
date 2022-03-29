import Image from 'next/image';
import amazed from '../../../images/amazed.png'

const Header = () => {
    return(
        <section id="header" className="" style={{backgroundColor:'#3C8224'}}>
            <div className="flex">
                <div className="basis-1/2">
                    <h1 className="text-white text-4xl text-center font-medium">Over 2000 jobs available for grabs</h1>
                </div>
                <div className="">
                        <Image src={amazed}  alt="text" width={550} height={400}/>
                </div>
            </div>
        </section>
    )
}

export default Header;