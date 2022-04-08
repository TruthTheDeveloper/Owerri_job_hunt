import Link from "next/link"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CHECK_USER_SLUG_EXISTS } from "../../../misc/helpers/authTokenManager";
import LoginUserDispatcher, { resetLoginStoreState } from '../../../store/dispatchers/Auth/User/Login';
import Loader from "../../../misc/Loader";


const Candidate = () => {

    const LoginState = useSelector((state) => state.LoginUserReducer)
    const dispatch = useDispatch()
    const router = useRouter()

    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const { loading:AppLoading } = useSelector(state => state.AppLoadingReducer);


    const [candidate, setCandidate] = useState({
        email:'',
        password:'',
    })

    useEffect(() => {
        const fetchUserToken = async () => {
            await CHECK_USER_SLUG_EXISTS()  && router.push("/dashboard/candidate");
        };
    
        fetchUserToken();
      }, []);

      useEffect(() => {
        if (!LoginState.error && LoginState.message.length > 0) {
          dispatch(resetLoginStoreState());
          router.push("/dashboard/candidate");
        }
      }, [LoginState.error, LoginState.message]);

    const submitHandler = (e) => {
        e.preventDefault()

        candidate.email.length < 1 ? setEmailValidation(' Please input Email') : setEmailValidation('')
        candidate.password.length < 1 ? setPasswordValidation('Please input password') : setPasswordValidation('')



        candidate.email.length > 1 &&  candidate.password.length > 1 &&  dispatch(LoginUserDispatcher({email:candidate.email, password:candidate.password}));
        //  router.push('/plan')

        
    }

    return(
        <section className="py-48 w-full flex">
            <form className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2">
                <h1 className="text-center my-5 font-semibold" style={{color:"#14A800"}}>LOGIN AS A CANDIDATE</h1>
                <div className="py-4 w-full ">
                    <label>Email</label><br/>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" type='email' onChange={(e) => setCandidate({...candidate, email:e.target.value})}/>
                    <p className="text-red-600">{emailValidation}</p>
                </div>
                <div className="py-4 ">
                    <label>Password</label><br/>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" type='password' onChange={(e) => setCandidate({...candidate, password:e.target.value})}/>
                    <p className="text-red-600">{passwordValidation}</p>
                </div>
                <button onClick={submitHandler} className={`w-48 mx-auto h-12 text-white rounded-full my-6 text-lg ${AppLoading && 'btn-loading'}`} style={{backgroundColor:"#14A800"}}>{ AppLoading ? <Loader color="#fff" />:"Log In"}</button>
                <div className="flex flex-col">
                        <div className="flex">
                            <h1 className="py-2 pr-1 " style={{color:"#14A800"}}>Dont have an account ?</h1>
                            <Link href="/candidate/register">
                                <span className="py-2 underline cursor-pointer" style={{color:"#14A800"}}>Sign Up</span>
                            </Link>
                        </div>
                        <Link href="/forget-password/buisness">
                            <h1 className="py-2 pr-2 cursor-pointer" style={{color:"#14A800"}}>ForgetPassword</h1>
                        </Link>
                        
                    </div>
            </form>
        </section>
    )
}
export default Candidate