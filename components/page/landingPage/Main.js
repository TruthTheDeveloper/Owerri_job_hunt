//react
import React, {useState, useEffect} from 'react';

//React lottie  animation
import Lottie from 'react-lottie';
import * as animationData from '../../../lotties/job.json';
import * as animate from '../../../lotties/talent.json'

//Aos animation
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const Main = () => {

    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);
    

      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const defaultOption = {
        loop: true,
        autoplay: true, 
        animationData: animate,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const[isStopped, setIsStopped] = useState(false)
    const[isPaused, setIsPaused] = useState(false)

    return(
        <section id="services">
            <h1 className="text-center text-4xl font-semibold my-12">HOW TO GET <br/> STARTED</h1>
            <div className="flex flex-col md:flex-row">
                <div className="basis-1/2 text-xl md:px-24 px-4 my-24" data-aos="zoom-in">
                    <h1 className="font-bold mb-4">Seeking for Jobs?</h1>
                    <h1>Register for upskill 1 month traning program with a sum of #5000 and get access to course material, training and mentorship, to equip, prepare and connect you to your dream job!</h1>

                    <Link href="/candidate/register">
                      <button className=" px-6 py-4 text-white mt-12 rounded-md" style={{backgroundColor:"#14A800"}}>Enroll Now</button>
                    </Link>
                </div>
                <Lottie options={defaultOptions}
                height={500}
                width={400}
                isStopped={isStopped}
                isPaused={isPaused}/>
            </div>
            <div className="flex flex-col-reverse md:flex-row">

            <Lottie options={defaultOption}
                height={500}
                width={400}
                isStopped={isStopped}
                isPaused={isPaused}/>
                <div className="basis-1/2 text-xl md:px-24 px-4 my-24" data-aos="zoom-in">
                    <h1 className="font-bold mb-4">Seeking  for Talents?</h1>
                    <h1>Upskill network proposes to partner with your buisness to train and prepare candidate fit for your organization, Join other smart Buisnesses to discover and hire Digital Talents from Owerri best talent pool</h1>

                    <Link href="/buisness/register">
                      <button className=" px-6 py-4 text-white mt-12 rounded-md" style={{backgroundColor:"#14A800"}}>Hire Talent</button>
                    </Link>
                </div>
                
            </div>
        </section>
    )
}
export default Main