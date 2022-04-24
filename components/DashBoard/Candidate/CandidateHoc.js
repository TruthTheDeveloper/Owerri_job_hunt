import Link from 'next/link';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { faPerson} from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import AuthContext from '../../../context/auth-context';
import { useState, useContext } from 'react';

import Calender from './CandidateComponent/Calander';
import RightSideDrawer from './CandidateComponent/RightSideDrawer';
import LeftSideDrawer from './CandidateComponent/LeftSideDrawer';
import Pagination from './CandidateComponent/Pagination';

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const CandidateHoc = ({children, week1}) => {

  const config = {
    public_key: 'FLWPUBK-d2542a2ff7622c1994ace0b074b9a6ea-X',
    tx_ref: Date.now(),
    amount: 10000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Pay for course',
      description: 'Payment owerri jobhunt course',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const {week, setWeek} = useContext(AuthContext)
  const [openRightSideDrawer, setOpenRightSideDrawer] = useState(false)
  const [openLeftSideDrawer, setOpenLeftSideDrawer] = useState(false)


  

  const closeOpenRight = () => {
    setOpenRightSideDrawer(false)
  }

  const closeOpenLeft = () => {
    setOpenLeftSideDrawer(false)
  }

  


    return (
        <section className="grid grid-cols-1 grid-rows-1 lg:grid-cols-5 xl:grid-cols-7 m-5 rounded-xl bg-slate-" >
        <section className=" h-screen pt-5 hidden lg:block bg-white" >
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
            <div className="mt-56 flex py-8 text-center text-lg text-white mr-2 rounded-md shadow-xl cursor-pointer"  style={{backgroundColor:"#14A800"}} onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}>
              <FontAwesomeIcon icon={faMoneyBill} className="ml-6 mt-1"/>
              <h1 className="pl-2">Make Payment</h1>
            </div>
          </Link>
          <button className="bg-white py-4 mx-auto my-4 text-green-500 font-semibold shadow-xl px-6 mx-10 border rounded-md">Logout</button>
        </div>

        </section>
        <>
        
        <section className="bg-slate-100  col-span-2 xl:col-span-4">
          <nav className="flex justify-between lg:hidden">
              <div className=" cursor-pointer" onClick={() => setOpenRightSideDrawer(true)}>
                  <FontAwesomeIcon icon={faBars} className="text-green-600 h-6 w-6 ml-2 mt-2"/>
              </div>
              <div className=" cursor-pointer" onClick={() => setOpenLeftSideDrawer(true)}>
                  <FontAwesomeIcon icon={faCalendar} className="text-green-600 w-6 ml-2 mt-2"/>
              </div>
          </nav>
            <div className="text-center text-2xl font-semibold my-4"><h1>{week}</h1></div>
            
            {children}
           <RightSideDrawer open={openRightSideDrawer} close={closeOpenRight}/>
           <LeftSideDrawer open={openLeftSideDrawer} close={closeOpenLeft}/>
        </section>
        </>
        <section className=" h-screen  rounded-xl hidden lg:block col-span-2 bg-white">
            <div className="flex justify-between bg-white">
              <h1 className="text-2xl ml-8">Henry Truth</h1>
              <div className="bg-slate-700 h-14 w-14 rounded-full mr-4 ">
              </div>
            </div>
            <Calender weeks={"Week 1"} weekroute={"Week1"}/>
            <Calender weeks={"Week 2"} weekroute={"Week2"}/>
        </section>
      </section>
    )
}

export default CandidateHoc;