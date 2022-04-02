import Header from './landingPage/Header';
import Main from './landingPage/Main';
import Sponsor from './landingPage/Sponsors';
import Testimonial from './landingPage/Testimonials';
import ContactUs from './landingPage/ContactUs';
import Footer from './landingPage/Footer';
import AboutUs from './landingPage/AboutUs';
import SponsorsForm from './landingPage/SponsorsForm';
// import Talent from './landingPage/Talents';
import AllTalents from './landingPage/AllTalents';
import Test from './landingPage/Test';

const LandingPage = () => {


   
     return(
         <>
            <Header/>
            <Main/>
            <AllTalents/>
            {/* <Talent/> */}
            <Sponsor/>
            <Test/>
            <SponsorsForm/>
            <Testimonial/>
            <AboutUs/>
            <ContactUs/>
            <Footer/>
         </>
     )
}
export default LandingPage;