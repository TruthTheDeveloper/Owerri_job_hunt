import {useState} from 'react';

const ContactUs = () => {

    const [contact, setContact] = useState({
        name:"",
        phoneNumber:"",
        email:"",
        message:""
    })

    return(
        <section className="my-24">
            <div className="bg-re w-6/12 mx-auto flex flex-col justify-center ">
                <h1 className="text-center text-3xl font-medium">Contact Us</h1>
                <div className="flex flex-col justify-center mx-16">
                        <label>Name</label><br/>
                        <input className="h-10 border-0 border-green-500 border-b-2 outline-none" onChange={(e) => setContact({...contact, name:e.target.value})}/>
                </div>
                <div className="flex flex-col justify-center mx-16 mt-8">
                        <label>PhoneNumber</label><br/>
                        <input className="h-10 border-0 border-green-500 border-b-2 outline-none" onChange={(e) => setContact({...contact, phoneNumber:e.target.value})}/>
                </div>
                <div className="flex flex-col justify-center mx-16 mt-8">
                        <label>Email</label><br/>
                        <input className="h-10 border-0 border-green-500 border-b-2 outline-none" onChange={(e) => setContact({...contact, email:e.target.value})}/>
                </div>
                <div className="flex flex-col justify-center mx-16 mt-8">
                        <label>Message</label><br/>
                        <textarea className="h-16  border-0 border-green-500 border-b-2 outline-none" onChange={(e) => setContact({...contact, message:e.target.value})}/>
                </div>
                <div>
                    <button className="px-24 mt-8 py-4 mx-auto flex rounded-full text-white text-xl" style={{backgroundColor:"#14A800"}}>Contact US</button>
                </div>
            </div>
        </section>
    )

}

export default ContactUs; 