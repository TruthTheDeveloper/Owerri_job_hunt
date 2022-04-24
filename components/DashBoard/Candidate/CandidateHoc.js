import Link from "next/link";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import AuthContext from "../../../context/auth-context";
import { useRouter } from "next/router";
import Image from "next/image";
import Calender from "./CandidateComponent/Calander";
import GetUserFromSlugDispatcher from "../../../store/dispatchers/Auth/User/GetUserFromSlug";
import { CHECK_USER_SLUG_EXISTS } from "../../../misc/helpers/authTokenManager";
import { useDispatch, useSelector } from "react-redux";

const CandidateHoc = ({ children, week1 }) => {
  const { week, setWeek } = useContext(AuthContext);
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, error, success, message, token } = useSelector(
    (state) => state.GetUserFromSlug
  );

  useEffect(() => {
    CHECK_USER_SLUG_EXISTS() && dispatch(GetUserFromSlugDispatcher());
  }, []);

  useEffect(() => {
    if (message.length > 0) {
      console.log(success, user, error, message, token);
      if (success && !error && user?.id) {
        console.log(user?.profile);
      }
    }
  }, [success, user, error, message, token]);

  return (
    <section className="grid grid-cols-7 grid-rows-1 m-5 rounded-xl">
      <section className=" h-screen pt-5 ">
        <Link href="/">
          <h1 className="lg:text-2xl text-3xl font-bold ml-2 mb-8">
            Owerri{" "}
            <span className="font-bold " style={{ color: "#14A800" }}>
              JobHunt
            </span>
          </h1>
        </Link>

        <div>
          <Link href="#">
            <div
              className="my-4 flex py-2  text-lg text-white mr-2 rounded-md shadow-xl cursor-pointer"
              style={{ backgroundColor: "#14A800" }}
            >
              <FontAwesomeIcon icon={faPerson} className="ml-6 mt-1" />
              <h1 className="ml-4">DashBoard</h1>
            </div>
          </Link>
          <Link href="/dashboard/candidate/week1/course">
            <div
              className="my-4 flex py-2  text-lg text-white mr-2 rounded-md shadow-xl cursor-pointer"
              style={{ backgroundColor: "#14A800" }}
            >
              <FontAwesomeIcon icon={faBook} className="ml-6 mt-1" />
              <h1 className="ml-4">My Courses</h1>
            </div>
          </Link>
          <Link href="/dashboard/candidate/jobs">
            <div
              className="my-4 py-2 flex text-center text-lg text-white mr-2 rounded-md shadow-xl cursor-pointer"
              style={{ backgroundColor: "#14A800" }}
            >
              <FontAwesomeIcon icon={faBriefcase} className="ml-6 mt-1" />
              <h1 className="ml-4">My jobs</h1>
            </div>
          </Link>
          <Link href="#">
            <div
              className="mt-56 flex py-8 text-center text-lg text-white mr-2 rounded-md shadow-xl cursor-pointer"
              style={{ backgroundColor: "#14A800" }}
            >
              <FontAwesomeIcon icon={faMoneyBill} className="ml-6 mt-1" />
              <h1 className="pl-2">Make Payment</h1>
            </div>
          </Link>
          <button className="bg-white py-4 mx-auto my-4 text-green-500 font-semibold shadow-xl px-6 mx-10 border rounded-md">
            <Link href="/logout">Logout</Link>
          </button>
        </div>
      </section>
      <section className="bg-slate-100 h-screen col-span-4">
        <div className="text-center text-2xl font-semibold my-4">
          <h1>{week}</h1>
        </div>
        <div className="grid grid-cols-2 justify-center">{children}</div>
        <div className="flex py-8 justify-center  text-white">
          <button
            className="py-2 px-4 rounded-md mx-2"
            style={{ backgroundColor: "#14A800" }}
          >
            1
          </button>
          <button
            className="py-2 px-4 rounded-md mx-2"
            style={{ backgroundColor: "#14A800" }}
          >
            2
          </button>
          <button
            className="py-2 px-4 rounded-md mx-2"
            style={{ backgroundColor: "#14A800" }}
          >
            3
          </button>
          <button
            className="py-2 px-4 rounded-md mx-2"
            style={{ backgroundColor: "#14A800" }}
          >
            4
          </button>
        </div>
      </section>
      <section className=" h-screen col-span-2 rounded-xl">
        <Link href="/profile/candidate" >
          <div
            className="flex justify-between bg-white"
            style={{ justifyContent: "center", alignItems: "center",cursor:"pointer" }}
          >
            <h1 className="text-2xl ml-8">{user?.username}</h1>
            <div className=" h-14 w-14 rounded-full mr-4 ">
              <Image
                src={`https://res.cloudinary.com/dkx4uksdl/${user?.profile?.profile_image}`}
                alt="Picture of the User"
                width={500}
                height={500}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
        </Link>
        <Calender weeks={"week 1"} weekroute={"week1"} />
        <Calender weeks={"week 2"} weekroute={"week2"} />
      </section>
    </section>
  );
};

export default CandidateHoc;
