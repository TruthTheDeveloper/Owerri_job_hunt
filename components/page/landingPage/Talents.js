import { Swiper, SwiperSlide } from "swiper/react";
import Alex from '../../../images/talents/Alex.jpg';
import Edgar from '../../../images/talents/Edgar.jpg';
import ikeagwu from '../../../images/talents/ikeagwu.jpg';
import jane from '../../../images/talents/jane.jpg';
import marvis from '../../../images/talents/marvis.jpg';
import vitalis from '../../../images/talents/vitalis.jpg'
import Image from 'next/image';
import { Pagination } from "swiper";
import 'swiper/css';

// Alexis Munonozi
// Edgar Ampiire
// Ikeagwu Ebuka
// Ikeagwu Ebuka

const Talent = () => {
    

    return (
        <section className="py-24">

        <h1 className="font-semibold text-center py-16 text-2xl">A GLIMPSE OF FEW OWERRI TALENTS</h1>

            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-white shadow-lg border flex flex-col mx-12 px-8 pt-4">

              <Image src={Alex} height={250} width={300}/>
              <h1 className="text-lg font-semibold mt-4">Alex Munonozi</h1>
              <p className="text-center text-xl my-4">Digital marketer</p>
              <button className="w-48 mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-white shadow-lg border flex flex-col mx-12 px-8 pt-4 ">
              <Image src={Edgar} height={250} width={200}/>
              <h1 className="text-lg font-semibold mt-4">Alex Munonozi</h1>
              <p className="text-center text-xl my-4">Digital marketer</p>
              <button className="w-48 mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
            </div>
          </SwiperSlide>
        <SwiperSlide>
            <div className="bg-white shadow-lg border flex flex-col mx-12 px-8 pt-4">
              <Image src={ikeagwu} height={250} width={200}/>
              <h1 className="text-lg font-semibold mt-4">Alex Munonozi</h1>
              <p className="text-center text-xl my-4">Digital marketer</p>
              <button className="w-48 mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
            </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow-lg border flex flex-col mx-12 px-8 pt-4">
            <Image src={jane} height={250} width={200}/>
            <h1 className="text-lg font-semibold mt-4">Alex Munonozi</h1>
              <p className="text-center text-xl my-4">Digital marketer</p>
              <button className="w-48 mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow-lg border flex flex-col mx-12 px-8 pt-4">
            <Image src={marvis} height={250} width={200}/>
            <h1 className="text-lg font-semibold mt-4">Alex Munonozi</h1>
              <p className="text-center text-xl my-4">Digital marketer</p>
              <button className="w-48 mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow-lg border flex flex-col mx-12 px-8 pt-4">
            <Image src={vitalis} height={250} width={200}/>
            <h1 className="text-lg font-semibold mt-4">Alex Munonozi</h1>
              <p className="text-center text-xl my-4">Digital marketer</p>
              <button className="w-48 mx-auto h-12 text-white rounded-lg my-6 text-lg" style={{backgroundColor:"#14A800"}}>View Profile</button>
          </div>
        </SwiperSlide>
      </Swiper>

        </section>
    )
}

export default Talent;