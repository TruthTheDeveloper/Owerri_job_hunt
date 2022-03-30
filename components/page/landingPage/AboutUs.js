import Image from "next/image";
import Woman from '../../../images/woman.jpeg';
const AboutUs = () => {

    return(
        <section className="my-12">
            <h1 className="text-center text-4xl font-semibold my-8">About Us</h1>
            <div className="flex w-7/12 mx-auto" style={{backgroundColor:"#F2F7F2"}}>
                <div className="">
                    <Image src={Woman} height={1800} width={1500} />
                </div>
                <div className=" mx-5 " style={{color:"#3C8224"}}>
                    <h1 className="text-xl mt-4">This Project is brought to you by Upskill Network</h1>
                    <h1 className="text-2xl mt-8">Upskill Network is a team of didgital skill experts facilitating digital transformation accross Nigeria through inclusive digital literacy training programs, buisness incubation and support, consulting and partnership with other government agency</h1>
                </div>
            </div>

        </section>
    )
}

export default AboutUs;