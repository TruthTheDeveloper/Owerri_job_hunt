//images
import Alex from '../../../images/talents/Alex.jpg';
import Edgar from '../../../images/talents/Edgar.jpg';
import ikeagwu from '../../../images/talents/ikeagwu.jpg';
import jane from '../../../images/talents/queen.jpg';
import marvis from '../../../images/talents/marvis.jpg';
import vitalis from '../../../images/talents/vitalis.jpg'

// Reeact swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

//next import
import { useRouter } from "next/router";
import Image from 'next/image';
import Modal from "../../Modal";

//constant
import {AlexSpeech,EdgaSpeech,EbukaSpeech,AngelSpeech,JaneSpeech,MarvisSpeech} from '../../../CONSTANT';

//React
import { useEffect, useState } from "react";


let modal = null;
const Talent = () => {

  const router = useRouter()
  const [openProfile, setOpenProfile] = useState(false)
    
  const [isGreaterThan425x, setIsGreaterThan425px] = useState(1);

  // adding logic to web responsivness
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setIsGreaterThan425px(1);
      } else if(window.innerWidth < 1000){
        setIsGreaterThan425px(2);
      } else if(window.innerWidth > 1000){
        setIsGreaterThan425px(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

    
    const profileHandler = (name, skill,speech, image,) => {
      setOpenProfile(true)
      modal = <Modal  name={name} skill={skill} speech={speech} image={image} closeModal={() => setOpenProfile(false)} />
      
    }


    return (
      <>
        
        <section className="lg:py-24   lg:block">

        <h1 className="font-semibold text-center py-16 text-2xl">A GLIMPSE OF FEW OWERRI TALENTS</h1>

            <Swiper
        slidesPerView={isGreaterThan425x}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="bg-white shadow-lg border flex flex-col xl:mx-12 xl:px-8 lg:mx-8 lg:px-6 lg:pt-4 md:mx-16 md:px-6 mx-8 px-4 pt-2">
              <Image src={Edgar} height={250} width={250} alt="info"/>
              <h1 className="text-lg font-semibold mt-4">Edgar Ampiire</h1>
              <p className="text-center text-xl my-4">Content Writer</p>
              <button onClick={() => profileHandler('Edgar Ampiire', 'Content Writer',EdgaSpeech, Edgar)}  className="xl:w-48 xl:mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
            </div>
          </SwiperSlide>
        <SwiperSlide>
            <div className="bg-white shadow-lg border flex flex-col xl:mx-12 xl:px-8 lg:mx-8 lg:px-6 lg:pt-4 md:mx-16 md:px-6 mx-8 px-4 pt-2">
              <Image src={ikeagwu} height={250} width={250} alt="info"/>
              <h1 className="text-lg font-semibold mt-4">Ikeagwu Ebuka</h1>
              <p className="text-center text-xl my-4">Web Developer</p>
              <button onClick={() => profileHandler('Ikeagwu Ebuka', 'Web Developer', EbukaSpeech, ikeagwu)}  className="xl:w-48 xl:mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
            </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow-lg border flex flex-col xl:mx-12 xl:px-8 lg:mx-8 lg:px-6 lg:pt-4 md:mx-16 md:px-6 mx-8 px-4 pt-2">
            <Image src={jane} height={250} width={250} alt="info"/>
            <h1 className="text-lg font-semibold mt-4">Angel vitalis</h1>
              <p className="text-center text-xl my-4">Graphic Designer</p>
              <button onClick={() => profileHandler('Angel vitalis', 'Graphic Designer', JaneSpeech ,jane)}  className="xl:w-48 xl:mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-white shadow-lg border flex flex-col xl:mx-12 xl:px-8 lg:mx-8 lg:px-6 lg:pt-4 md:mx-16 md:px-6 mx-8 px-4 pt-2">

              <Image src={Alex} height={250} width={250} alt="info"/>
              <h1 className="text-lg font-semibold mt-4">Alex Munonozi</h1>
              <p className="text-center text-xl my-4">Digital marketer</p>
              <button onClick={() => profileHandler('Alex Munonozi', 'Digital marketer', AlexSpeech, Alex)} className="xl:w-48 xl:mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow-lg border flex flex-col xl:mx-12 xl:px-8 lg:mx-8 lg:px-6 lg:pt-4 md:mx-16 md:px-6 mx-8 px-4 pt-2">
            <Image src={marvis} height={250} width={250} alt="info"/>
            <h1 className="text-lg font-semibold mt-4">Jane Bolagi</h1>
              <p className="text-center text-xl my-4">Project Manager</p>
              <button onClick={() => profileHandler('Jane Bolagi', 'Project Manager', MarvisSpeech, marvis)}  className="xl:w-48 xl:mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow-lg border flex flex-col xl:mx-12 xl:px-8 lg:mx-8 lg:px-6 lg:pt-4 md:mx-16 md:px-6 mx-8 px-4 pt-2 mb-24">
            <Image src={vitalis} height={250} width={250} alt="info"/>
            <h1 className="text-lg font-semibold mt-4">Marvis Chukwu</h1>
              <p className="text-center text-xl my-4">UIUX Designer</p>
              <button onClick={() => profileHandler('Marvis Chukwu', 'UIUX Designer', AngelSpeech, vitalis)}  className="xl:w-48 xl:mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
          </div>
        </SwiperSlide>
      </Swiper>
        
        </section>
        {openProfile && modal}
      </>
    )
}

export default Talent;