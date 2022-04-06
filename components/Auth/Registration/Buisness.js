import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Select from 'react-select';
import RegisterCompanyDispatcher from "../../../store/dispatchers/Auth/Company/Register";
import { useDispatch, useSelector } from "react-redux";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import CandidateEmailValidationAlert from "../EmailVerification/User";
import Loader from "../../../misc/Loader";

const Buisness = () => {
    const dispatch = useDispatch()
    const RegisterCompanyState = useSelector(
        (state) => state.RegisterCompanyReducer
      );
  const { loading:AppLoading } = useSelector(state => state.AppLoadingReducer);


    const options = [
        { value: 'Techonlogy and Media', label: 'Techonlogy and Media' },
        { value: 'Food and Eatery', label: 'Food and Eatery' },
        { value: 'Industrial Services', label: 'Industrial Services' },
        { value: 'Health', label: 'Health' },
    ]

    const [buisnessOption, setBuisnessOption] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(undefined)

    const [nameValidation, setNameValidation] = useState('');
    const [phoneNumberValidation, setPhoneNumberValidation] = useState('');
    const [typeValidation, setTypeValidation] = useState('');
    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState('');

    const [registerationSuccessful, setRegisterationSuccessful] = useState(false);

    useEffect(() => {
        if (RegisterCompanyState.message?.length > 0) {
          !RegisterCompanyState.error && setRegisterationSuccessful(true);
        }
      }, [RegisterCompanyState.error, RegisterCompanyState.message]);

    const router = useRouter()

    const [buisness, setBuisness] = useState({
        buisnessName:'',
        buisnessEmail:'',
        buisnessPhoneNumber:'',
        buisnessType:'',
        businessPassword:'',
        confirmBuisnessPassword:'',

    })

    const submitHandler = (e) => {
        e.preventDefault()

        buisness.buisnessName.length < 1 ? setNameValidation(' Please input Name') : setNameValidation('')
        buisness.buisnessEmail.length < 1 ? setEmailValidation(' Plesae input Email') : setEmailValidation('')
        phoneNumber === undefined ? setPhoneNumberValidation('Please input PhoneNumber') : setPhoneNumberValidation('')
        buisnessOption === null ? setTypeValidation('Please select buisness Type') : setTypeValidation('')
        buisness.businessPassword.length < 1 ? setPasswordValidation('Please input password') : setPasswordValidation('')
        buisness.confirmBuisnessPassword.length < 1 ? setConfirmPasswordValidation("please confirm password") : setConfirmPasswordValidation('')
        buisness.businessPassword !== buisness.confirmBuisnessPassword ? setConfirmPasswordValidation("password does not match") : setConfirmPasswordValidation('')

        
        buisness.buisnessName.length > 1  && buisness.buisnessEmail.length > 1  && phoneNumber !== undefined && buisnessOption !== null &&  buisness.businessPassword.length > 1  &&   buisness.confirmBuisnessPassword === buisness.businessPassword && dispatch(
            RegisterCompanyDispatcher({
              company_name: buisness.buisnessName,
              company_email_address: buisness.buisnessEmail,
              company_password: buisness.businessPassword,
              company_type: buisnessOption,
              company_phoneNumber:phoneNumber
            })
          );
        
    }

    return registerationSuccessful ? 
        <CandidateEmailValidationAlert isCompany={ true } /> :
        <section className="py-48 w-full flex">
            <form className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2">
            <h1 className="text-center my-5 font-semibold" style={{color:"#14A800"}}>REGISTER AS A BUISNESS</h1>
                <div className="py-4 w-full ">
                    <label>Buisness Name</label>
                    <input  className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" onChange={(e) => setBuisness({...buisness, buisnessName:e.target.value})} minLength={2}
                required/>
                    <p className="text-red-600">{nameValidation}</p>
                </div>
                <div className="py-4 ">
                    <label>Buisness Email</label>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" onChange={(e) => setBuisness({...buisness, buisnessEmail:e.target.value})}/>
                    <p className="text-red-600">{emailValidation}</p>
                </div>
                <div className="py-4 ">
                    <label>Buisness PhoneNumber</label>
                    <PhoneInput
                    placeholder="Enter phone number"
                    className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" 
                    value={phoneNumber}
                    onChange={setPhoneNumber}/>
                    <p className="text-red-600">{phoneNumberValidation}</p>
                </div>
                <div className="py-4 ">
                    <label>Buisness Type</label>
                    <Select
                        defaultValue={buisnessOption}
                        onChange={setBuisnessOption}
                        options={options}
                        className="h-10 w-full outline-none border mt-4 border-green-500  rounded-md"
                    />
                    <p className="text-red-600">{typeValidation}</p>

                </div>
                <div>
                    <label>Password</label>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" type='password' onChange={(e) => setBuisness({...buisness, businessPassword:e.target.value})}/>
                   <p className="text-red-600">{passwordValidation}</p>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md" type='password' onChange={(e) => setBuisness({...buisness, confirmBuisnessPassword:e.target.value})}/>
                    <p className="text-red-600">{confirmPasswordValidation}</p>
                </div>
                    <button className={`w-48 mx-auto h-12 text-white rounded-full my-6 text-lg ${AppLoading && 'btn-loading'}`} onClick={submitHandler} style={{backgroundColor:"#14A800"}}>{ AppLoading ? <Loader color="#fff"/>:"Sign Up"}</button>
                    <div className="flex">
                        <h1 className="py-2 pr-1 " style={{color:"#14A800"}}>Already have an account ?</h1>
                        <Link href="/buisness/login">
                            <span className="py-2 underline cursor-pointer" style={{color:"#14A800"}}>Log in</span>
                        </Link>
                    </div>
            </form>
        </section>
    
}

export default Buisness;

