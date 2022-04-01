import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Candidate = () => {

    const router = useRouter()

    const [phoneNumber, setPhoneNumber] = useState()

    const [nameValidation, setNameValidation] = useState('');
    const [phoneNumberValidation, setPhoneNumberValidation] = useState('');
    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState('');


    const [candidate, setCandidate] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
    })

    const submitHandler = (e) => {
        e.preventDefault()

        candidate.username.length < 1 ? setNameValidation(' Please input Name') : setNameValidation('')
        candidate.email.length < 1 ? setEmailValidation(' Plesae input Email') : setEmailValidation('')
        phoneNumber === undefined ? setPhoneNumberValidation('Please input PhoneNumber') : setPhoneNumberValidation('')
        candidate.password.length < 1 ? setPasswordValidation('Please input password') : setPasswordValidation('')
        candidate.confirmPassword.length < 1 ? setConfirmPasswordValidation("please confirm password") : setConfirmPasswordValidation('')
        candidate.password !== candidate.confirmPassword ? setConfirmPasswordValidation("password does not match") : setConfirmPasswordValidation('')


        candidate.username.length > 1 && candidate.email.length > 1  &&  phoneNumber !== undefined &&  candidate.password.length > 1  && candidate.confirmPassword.length > 1 && router.push('/email-verification/candidate')
        
    }

    return(
        <section className="py-48 w-full flex">
            <form className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2">
                <h1 className="text-center my-5 font-semibold" style={{color:"#14A800"}}>REGISTER AS A CANDIDATE</h1>
                <div className="py-4 w-full ">
                    <label>Username</label><br/>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"  onChange={(e) => setCandidate({...candidate, username:e.target.value})}/>
                    <p className="text-red-600">{nameValidation}</p>
                </div>
                <div className="py-4 ">
                    <label>Email</label><br/>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" onChange={(e) => setCandidate({...candidate, email:e.target.value})}/>
                    <p className="text-red-600">{emailValidation}</p>
                </div>
                <div className="py-4 ">
                    <label>PhoneNumber</label><br/>
                    <PhoneInput
                    placeholder="Enter phone number"
                    className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" 
                    value={phoneNumber}
                    onChange={setPhoneNumber}/>
                    <p className="text-red-600">{phoneNumberValidation}</p>
                </div>
                <div className="py-4 ">
                    <label>Password</label><br/>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" type='password' onChange={(e) => setCandidate({...candidate, password:e.target.value})}/>
                    <p className="text-red-600">{passwordValidation}</p>
                </div>
                <div className="py-4 ">
                    <label>Confirm Password</label><br/>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" type='password' onChange={(e) => setCandidate({...candidate, confirmPassword:e.target.value})}/>
                    <p className="text-red-600">{confirmPasswordValidation}</p>
                </div>
                    <button className="w-48 mx-auto h-12 text-white rounded-full my-6 text-lg" onClick={submitHandler} style={{backgroundColor:"#14A800"}}>Sign Up</button>
                    <div className="flex">
                        <h1 className="py-2 pr-1 " style={{color:"#14A800"}}>Already have an account ?</h1>
                        <Link href="/candidate/login">
                            <span className="py-2 underline cursor-pointer" style={{color:"#14A800"}}>Log in</span>
                        </Link>
                    </div>
                
            </form>
        </section>
    )

}

export default Candidate