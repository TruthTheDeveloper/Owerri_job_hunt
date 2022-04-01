import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Buisness = () => {

    const router = useRouter()

    const [buisness, setBuisness] = useState({
        buisnessEmail:'',
        businessPassword:'',
        buisnessEmailError:'',
        buisenessPasswordError:"",


    })

    const submitHandler = (e) => {
        e.preventDefault()

        buisness.buisnessEmail.length < 1 && 
        buisness.businessPassword.length < 1 ? 
        setBuisness({...buisness,  buisnessEmailError:'Please input Buisness Email',  buisenessPasswordError:'Please input Buisness Password'}) : router.push('/plan/buisnessPlan')
        
    }

    return(
        <section className="py-48 w-full flex">
            <form className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2">
            <h1 className="text-center my-5 font-semibold" style={{color:"#14A800"}}>LOGIN AS A BUISNESS</h1>
                <div className="py-4 ">
                    <label>Buisness Email</label>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" onChange={(e) => setBuisness({...buisness, buisnessEmail:e.target.value})}/>
                    <p className="text-red-600">{buisness.buisnessEmailError}</p>
                </div>
                <div>
                    <label>Password</label>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" type='password' onChange={(e) => setBuisness({...buisness, businessPassword:e.target.value})}/>
                    <p className="text-red-600">{buisness.buisenessPasswordError}</p>
                </div>
                <button onClick={submitHandler} className="w-48 mx-auto h-12 text-white rounded-full my-6 text-lg" style={{backgroundColor:"#14A800"}}>Log In</button>
                    <div className="flex">
                        <h1 className="py-2 pr-1 " style={{color:"#14A800"}}>Dont have an account ?</h1>
                        <Link href="/buisness">
                            <span className="py-2 underline cursor-pointer" style={{color:"#14A800"}}>Sign Up</span>
                        </Link>
                    </div>
            </form>
        </section>
    )
    
}

export default Buisness;

