import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import RegisterUserDispatcher from "../../../store/dispatchers/Auth/User/Register";
import CandidateEmailValidationAlert from "../EmailVerification/Candidate";


const Candidate = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const RegisterUserState = useSelector((state) => state.RegisterUserReducer);
  const [registeratonSuccess, setRegisteratonStatus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState();

  const [nameValidation, setNameValidation] = useState("");
  const [phoneNumberValidation, setPhoneNumberValidation] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(
    ""
  );

  const [candidate, setCandidate] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (RegisterUserState.message.length > 0) {
      !RegisterUserState.error && setRegisteratonStatus(true);
    }
  }, [RegisterUserState.error, RegisterUserState.message]);

  const submitHandler = (e) => {
    e.preventDefault();

    candidate.username.length < 1
      ? setNameValidation(" Please input UserName")
      : setNameValidation("");
    candidate.email.length < 1
      ? setEmailValidation(" Plesae input Email")
      : setEmailValidation("");
    phoneNumber === undefined
      ? setPhoneNumberValidation("Please input PhoneNumber")
      : setPhoneNumberValidation("");
    candidate.password.length < 1
      ? setPasswordValidation("Please input password")
      : setPasswordValidation("");
    candidate.confirmPassword.length < 1
      ? setConfirmPasswordValidation("please confirm password")
      : setConfirmPasswordValidation("");
    candidate.password !== candidate.confirmPassword
      ? setConfirmPasswordValidation("password does not match")
      : setConfirmPasswordValidation("");

    candidate.username.length > 1 &&
      candidate.email.length > 1 &&
      phoneNumber !== undefined &&
      candidate.password.length > 1 &&
      candidate.confirmPassword === candidate.password &&
      dispatch(
        RegisterUserDispatcher({
          email: candidate.email,
          username: candidate.username,
          phoneNumber: phoneNumber,
          password: candidate.password,
        })
      );
    //   router.push('/email-verification/candidate')
  };

  return (
    <>
      {registeratonSuccess ? (
        <CandidateEmailValidationAlert />
      ) : (
        <section className="py-48 w-full flex">
          <form className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2">
            <h1
              className="text-center my-5 font-semibold"
              style={{ color: "#14A800" }}
            >
              REGISTER AS A CANDIDATE
            </h1>
            <div className="py-4 w-full ">
              <label>Username</label>
              <br />
              <input
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                onChange={(e) =>
                  setCandidate({ ...candidate, username: e.target.value })
                }
              />
              <p className="text-red-600">{nameValidation}</p>
            </div>
            <div className="py-4 ">
              <label>Email</label>
              <br />
              <input
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                onChange={(e) =>
                  setCandidate({ ...candidate, email: e.target.value })
                }
              />
              <p className="text-red-600">{emailValidation}</p>
            </div>
            <div className="py-4 ">
              <label>PhoneNumber</label>
              <br />
              <PhoneInput
                placeholder="Enter phone number"
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
              <p className="text-red-600">{phoneNumberValidation}</p>
            </div>
            <div className="py-4 ">
              <label>Password</label>
              <br />
              <input
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                type="password"
                onChange={(e) =>
                  setCandidate({ ...candidate, password: e.target.value })
                }
              />
              <p className="text-red-600">{passwordValidation}</p>
            </div>
            <div className="py-4 ">
              <label>Confirm Password</label>
              <br />
              <input
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                type="password"
                onChange={(e) =>
                  setCandidate({
                    ...candidate,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <p className="text-red-600">{confirmPasswordValidation}</p>
            </div>
            <button
              className="w-48 mx-auto h-12 text-white rounded-full my-6 text-lg"
              onClick={submitHandler}
              style={{ backgroundColor: "#14A800" }}
            >
              Sign Up
            </button>
            <div className="flex">
              <h1 className="py-2 pr-1 " style={{ color: "#14A800" }}>
                Already have an account ?
              </h1>
              <Link href="/candidate/login">
                <span
                  className="py-2 underline cursor-pointer"
                  style={{ color: "#14A800" }}
                >
                  Log in
                </span>
              </Link>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Candidate;
