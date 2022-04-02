import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import RegisterUserDispatcher from "../../store/dispatchers/Auth/User/Register";
import { useDispatch, useSelector } from "react-redux";
import UserAccountCreatedConfirmation from "./UserAccountCreatedConfirmation";

const CandidateRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const RegisterUserState = useSelector((state) => state.RegisterUserReducer);
  const [registeratonSuccess, setRegisteratonStatus] = useState(false);
  

  const [candidate, setCandidate] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    usernameError: "",
    emailError: "",
    fullNameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    candidate.username.length < 1 &&
    candidate.email.length < 1 &&
    candidate.fullName.length < 1 &&
    candidate.password.length < 1 &&
    candidate.confirmPassword.length < 1
      ? setCandidate({
          ...candidate,
          usernameError: "Please input username",
          emailError: "Please input email",
          fullNameError: "Please input phoneNumber",
          passwordError: "Please input Password",
          confirmPasswordError: "Please input confirm password",
        })
      : dispatch(
          RegisterUserDispatcher({
            email: candidate.email,
            fullName: candidate.fullName,
            password: candidate.password,
          })
        );
  };

  useEffect(() => {
    if (RegisterUserState.message.length > 0) {
      !RegisterUserState.error && setRegisteratonStatus(true);
    }
  }, [RegisterUserState.error, RegisterUserState.message]);

  return registeratonSuccess ? (
    <UserAccountCreatedConfirmation />
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
          <p className="text-red-600">{candidate.usernameError}</p>
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
          <p className="text-red-600">{candidate.emailError}</p>
        </div>
        <div className="py-4 ">
          <label>Full Name</label>
          <br />
          <input
            className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
            onChange={(e) =>
              setCandidate({ ...candidate, fullName: e.target.value })
            }
          />
          <p className="text-red-600">{candidate.fullNameError}</p>
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
          <p className="text-red-600">{candidate.passwordError}</p>
        </div>
        <div className="py-4 ">
          <label>Confirm Password</label>
          <br />
          <input
            className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
            type="password"
            onChange={(e) =>
              setCandidate({ ...candidate, confirmPassword: e.target.value })
            }
          />
          <p className="text-red-600">{candidate.confirmPasswordError}</p>
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
  );
};

export default CandidateRegister;
