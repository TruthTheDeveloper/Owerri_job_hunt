import Image from 'next/image';
import amazed from '../../../images/amazed.png'

const Header = () => {
    return(
        <section id="header" className="w-full overflow-hidden" style={{backgroundColor:'#3C8224'}}>
            <div className="flex flex-col md:flex-row pt-24 md:pt-36 ">
                <div className="md:pl-8 lg:pl-0 lg:basis-1/2 lg:mt-14">
                    <h1 className="text-white text-4xl sm:text-5xl xl:text-6xl text-center font-medium">Over 2000 Jobs Open <br/> For Grabs</h1>
                    <h1 className="text-slate-100 sm:text-lg xl:text-xl text-center font-medium mt-10">FIND AND HIRE TALENTS FOR YOUR BUISNESS</h1>
                    <div className="flex mx-auto justify-center my-10 lg:my-14 md:w-full">
                        <button className="lg:py-3  sm:text-lg   text-white rounded-md lg:text-xl xl:font-semibold py-2 px-5 md:px-8  mr-8  xl:mr-16 " style={{backgroundColor:"#14A800"}}>Find Jobs</button>
                        <button className="bg-white  sm:text-lg xl:py-4   rounded-md xl:text-xl xl:font-semibold px-4    lg:px-6 w">Hire Talents</button>
                    </div>
                </div>
                <div className="sm:ml-12 md:ml-0">
                        <Image src={amazed}  alt="text" width={650} height={450}/>
                </div>
            </div>
        </section>
    )
}

export default Header;