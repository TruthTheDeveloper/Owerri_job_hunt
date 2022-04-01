import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import black2 from '../../../images/black2 1.png';
import Woman from '../../../images/Woman1.jpeg';
import Woman2 from '../../../images/woman2.jpeg'
import Image from 'next/image';

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <section id="testimonials">
        <h1 className="text-center font-semibold text-3xl my-24 ">Testimonials</h1>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          {/* <Image src={black2} height={500} width={120}   /> */}
          <Image src={black2} height={120} width={120}  alt="testimonial" />
          {/* <img src={black2} className="w-20 h-16" alt="" /> */}
          <div className=" myCarousel text-white" style={{backgroundColor:"#F2F7F2"}}>
            <h3 className=" text-white">Amos Liberty</h3>
            <h4 className=" text-white">Digital Markeeter</h4>
            <p className=" text-white">
            Im glad to have been a participant During the Grassroot Digital Skill training, that took place at Adazi Nnukwu ICT Center Anaocha, Anambra state.
            Upskill team has been very intentional in transferring knowledge and the classes have been intensive. I learnt a lot on digital marketing and now I can proudly state that I have began earning from this digital Skill.
            </p>
          </div>
        </div>

        <div>
          {/* <Image src={Woman} height={500} width={120} /> */}
          <Image src={Woman} height={120} width={120} alt="testimonial"   />
          <div className="myCarousel" style={{backgroundColor:"#F2F7F2"}}>
            <h3>Chineye Ann</h3>
            <h4>Markerting Instructor</h4>
            <p>
              Upskill Network has a team of dedicated instructors, trainers and a very organized team. Enrolling into their program have been one of the best decisions Ive made. After interning, I have been able to secure jobs and work from home. Im glad to have found this tech institute.
            </p>
          </div>
        </div>

        <div>
          {/* <Image src={Woman2} height={500} width={120} /> */}
          <Image src={Woman2} height={120} width={120} alt="testimonial"   />
          <div className="myCarousel" style={{backgroundColor:"#F2F7F2"}}>
            <h3>Queen Davidson</h3>
            <h4>Markerting Instructor</h4>
            <p>
            I began my tech journey 2017, however, I made little or nothing out of the knowledge I had. A radio jingle performed the magic and I got connected with the biggest vocational Technology Institution in
            the south east region of Nigeria, Upskill Network. And today, I enjoy profits from this one in a life time connection. 
            </p>
          </div>
        </div>
      </Carousel>
      </section>
        
      );
}

export default Testimonials;