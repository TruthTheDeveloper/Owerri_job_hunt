import Image from 'next/image';
import amazed from '../../../images/amazed.png'

const Header = () => {
    return(
        <section id="header" className="" style={{backgroundColor:'#3C8224'}}>
            <div className="flex pt-24">
                <div className="basis-1/2">
                    <h1 className="text-white text-6xl text-center font-medium">Over 2000 jobs open <br/> for Grabs</h1>
                    <h1 className="text-slate-100 text-xl text-center font-medium mt-10">FIND AND HIRE TALENTS FOR YOUR BUISNESS</h1>
                    <div className="flex mx-auto justify-center my-10">
                        <button className="py-4 px-12 mx-4 text-white rounded-md text-xl font-semibold" style={{backgroundColor:"#14A800"}}>Find Jobs</button>
                        <button className="bg-white py-4 px-10 mx-4 rounded-md text-xl font-semibold">Hire Talents</button>
                    </div>
                </div>
                <div className="">
                        <Image src={amazed}  alt="text" width={650} height={450}/>
                </div>
            </div>
        </section>
    )
}

export default Header;