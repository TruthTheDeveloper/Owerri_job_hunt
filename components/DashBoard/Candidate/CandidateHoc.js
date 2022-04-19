import Link from 'next/link';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { faPerson} from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Calender from './CandidateComponent/Calander';

const CandidateHoc = ({children}) => {

    return (
        <section className="grid grid-cols-7 grid-rows-1 m-5 rounded-xl" >
        <section className=" h-screen pt-5 " >
        <Link href="/"><h1 className="lg:text-2xl text-3xl font-bold ml-2 mb-8">Owerri <span className="font-bold " style={{color:"#14A800"}} >JobHunt</span></h1></Link>

        <div>
        <Link href="#">
            <div className="my-4 flex py-2  text-lg text-white mr-2 rounded-md shadow-xl cursor-pointer" style={{backgroundColor:"#14A800"}} >
              <FontAwesomeIcon icon={faPerson} className="ml-6 mt-1"/>
              <h1 className="ml-4">DashBoard</h1>
            </div>
          </Link>
          <Link href="/dashboard/candidate/course">
            <div className="my-4 flex py-2  text-lg text-white mr-2 rounded-md shadow-xl cursor-pointer" style={{backgroundColor:"#14A800"}} >
              <FontAwesomeIcon icon={faBook} className="ml-6 mt-1"/>
              <h1 className="ml-4">My Courses</h1>
            </div>
          </Link>
          <Link href="/dashboard/candidate/jobs">
            <div className="my-4 py-2 flex text-center text-lg text-white mr-2 rounded-md shadow-xl cursor-pointer"  style={{backgroundColor:"#14A800"}} >
              <FontAwesomeIcon icon={faBriefcase} className="ml-6 mt-1"/>
              <h1 className="ml-4">My jobs</h1>
            </div>
          </Link>
          <Link href="#">
            <div className="mt-56 flex py-8 text-center text-lg text-white mr-2 rounded-md shadow-xl cursor-pointer"  style={{backgroundColor:"#14A800"}}>
              <FontAwesomeIcon icon={faMoneyBill} className="ml-6 mt-1"/>
              <h1 className="pl-2">Make Payment</h1>
            </div>
          </Link>
          <button className="bg-white py-4 mx-auto my-4 text-green-500 font-semibold shadow-xl px-6 mx-10 border rounded-md">Logout</button>
        </div>

        </section>
        <section className="bg-slate-100 h-screen col-span-4">
            <div className="text-center text-2xl font-semibold my-4"><h1>Week 1</h1></div>
            <div className="grid grid-cols-2 justify-center">
                {children}
                
            </div>
            <div className="flex py-8 justify-center  text-white">
              <button className="py-2 px-4 rounded-md mx-2" style={{backgroundColor:"#14A800"}}>1</button>
              <button className="py-2 px-4 rounded-md mx-2" style={{backgroundColor:"#14A800"}}>2</button>
              <button className="py-2 px-4 rounded-md mx-2" style={{backgroundColor:"#14A800"}}>3</button>
              <button className="py-2 px-4 rounded-md mx-2" style={{backgroundColor:"#14A800"}}>4</button>
            </div>
        </section>
        <section className=" h-screen col-span-2 rounded-xl">
            <div className="flex justify-between bg-white">
              <h1 className="text-2xl ml-8">Henry Truth</h1>
              <div className="bg-slate-700 h-14 w-14 rounded-full mr-4 ">
              </div>
            </div>
            <Calender week={"week 1"}/>
            <Calender week={"week 2"}/>
        </section>
      </section>
    )
}

export default CandidateHoc;