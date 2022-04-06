import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import LoginCompanyDispatcher, { resetLoginCompanyStoreState } from "../../../store/dispatchers/Auth/Company/Login";
import { faEye} from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Buisness = () => {

    const router = useRouter()
    const dispatch = useDispatch();
    const LoginCompanyState = useSelector(state => state.LoginCompanyReducer);
    
    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [eyeOpenPassword, setEyeOpenPassword] = useState(false);

    const [buisness, setBuisness] = useState({
        buisnessEmail:'',
        businessPassword:'',

    })

    useEffect(() => {
        if (LoginCompanyState.message.length > 0) {
            if (!LoginCompanyState.error) {
                dispatch(resetLoginCompanyStoreState());
                router.push("/dashboard/business");
            }
        }
    }, [LoginCompanyState]);

    const submitHandler = (e) => {
        e.preventDefault()
      
        buisness.buisnessEmail.length < 1 ? setEmailValidation(' Plesae input Email') : setEmailValidation('')
        buisness.businessPassword.length < 1 ? setPasswordValidation('Please input password') : setPasswordValidation('')
    

        buisness.buisnessEmail.length > 1 &&  buisness.businessPassword.length > 1 && dispatch(LoginCompanyDispatcher({company_email:buisness.buisnessEmail,company_password:buisness.businessPassword}))
        // router.push('/plan/buisnessPlan')
        
    }

    return(
        <section className="py-48 w-full flex">
            <form className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2">
            <h1 className="text-center my-5 font-semibold" style={{color:"#14A800"}}>LOGIN AS A BUISNESS</h1>
                <div className="py-4 ">
                    <label>Buisness Email</label>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" onChange={(e) => setBuisness({...buisness, buisnessEmail:e.target.value})}/>
                    <p className="text-red-600">{emailValidation}</p>
                </div>
                <div>
                    <label>Buisness Password</label>
                    {eyeOpenPassword ? <div className="flex h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"><input
                        className="outline-none w-full"
                        type="text"
                        onChange={(e) =>
                        setBuisness({ ...buisness, businessPassword: e.target.value })
                        }
                    />
                    <FontAwesomeIcon  style={{color:"#14A800"}} onClick={() => setEyeOpenPassword(prev => !prev)}  icon={faEye} className="w-4 h-4 mx-1 mt-2 mr-3 cursor-pointer"  /></div>

                    :<div className=" h-10 flex outline-none w-full border mt-4 border-green-500 pl-2 rounded-md "><input
                        className="outline-none w-full"
                        type="password"
                        onChange={(e) =>
                        setBuisness({ ...buisness, businessPassword: e.target.value })
                        }
                    />
                    <FontAwesomeIcon  style={{color:"#14A800"}} onClick={() => setEyeOpenPassword(prev => !prev)} icon={faEyeSlash} className="w-4 h-4 mx-1 mt-2 mr-3 cursor-pointer"  /></div>}
                    <p className="text-red-600">{passwordValidation}</p>
                </div>
                <button onClick={submitHandler} className="w-48 mx-auto h-12 text-white rounded-full my-6 text-lg" style={{backgroundColor:"#14A800"}}>Log In</button>
                    <div className="flex flex-col">
                        <div className="flex">
                            <h1 className="py-2 pr-1 " style={{color:"#14A800"}}>Dont have an account ?</h1>
                            <Link href="/buisness/register">
                                <span className="py-2 underline cursor-pointer" style={{color:"#14A800"}}>Sign Up</span>
                            </Link>
                        </div>
                        <Link href="/forget-password/candidate">
                            <h1 className="py-2 pr-2 cursor-pointer" style={{color:"#14A800"}}>ForgetPassword</h1>
                        </Link>
                        
                    </div>
            </form>
        </section>
    )
    
}

export default Buisness;

