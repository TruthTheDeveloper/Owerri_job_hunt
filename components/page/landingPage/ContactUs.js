import {useState} from 'react';

const ContactUs = () => {

    const [contact, setContact] = useState({
        name:"",
        phoneNumber:"",
        email:"",
        message:""
    })

    return(
        <section id="contact-us" className="my-48">
            <form className=" lg:w-5/12 mx-auto flex flex-col justify-center shadow-xl">
                <h1 className="text-center text-3xl font-medium mb-24">Contact Us</h1>
                <div className="flex flex-col justify-center mx-16">
                        <input className="h-10 border-0 border-green-500 border-b-2 outline-none placeholder:text-black  placeholder:text-lg" placeholder="Name" onChange={(e) => setContact({...contact, name:e.target.value})}/>
                </div>
                <div className="flex flex-col justify-center mx-16 mt-8">
                        <input className="h-10 border-0 border-green-500 border-b-2 outline-none placeholder:text-black  placeholder:text-lg" placeholder="PhoneNumber"  onChange={(e) => setContact({...contact, phoneNumber:e.target.value})}/>
                </div>
                <div className="flex flex-col justify-center mx-16 mt-8">
                        <input className="h-10 border-0 border-green-500 border-b-2 outline-none placeholder:text-black  placeholder:text-lg" placeholder="Email"  onChange={(e) => setContact({...contact, email:e.target.value})}/>
                </div>
                <div className="flex flex-col justify-center mx-16 mt-8">
                        <input className="h-10  border-0 border-green-500 border-b-2 outline-none placeholder:text-black  placeholder:text-lg" placeholder="Message"  onChange={(e) => setContact({...contact, message:e.target.value})}/>
                </div>
                <div className="py-8">
                    <button className="px-24 mt-8 py-4 mx-auto flex rounded-full text-white text-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg" style={{backgroundColor:"#14A800"}}>Contact US</button>
                </div>
            </form>
        </section>
    )

}

export default ContactUs; 