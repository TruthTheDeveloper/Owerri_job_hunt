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
        <>
        <h1 className="text-center font-semibold text-3xl my-24">Testimonials</h1>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <Image src={black2} height={500} width={120}   />
          {/* <Image src={black2} height={120} width={120}   /> */}
          {/* <img src={black2} className="w-20 h-16" alt="" /> */}
          <div className=" myCarousel text-white" style={{backgroundColor:"#F2F7F2"}}>
            <h3 className=" text-white">Shirley Fultz</h3>
            <h4 className=" text-white">Designer</h4>
            <p className=" text-white">
              Its freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <Image src={Woman} height={500} width={120} />
          {/* <Image src={black2} height={120} width={120}   /> */}
          <div className="myCarousel" style={{backgroundColor:"#F2F7F2"}}>
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <Image src={Woman2} height={500} width={120} />
          {/* <Image src={black2} height={120} width={120}   /> */}
          <div className="myCarousel" style={{backgroundColor:"#F2F7F2"}}>
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              Im on the go!
            </p>
          </div>
        </div>
      </Carousel>
        </>
        
      );
}

export default Testimonials;