import Header from './landingPage/Header';
import Main from './landingPage/Main';
import Sponsor from './landingPage/Sponsors';
import Testimonial from './landingPage/Testimonials';
import ContactUs from './landingPage/ContactUs';
import Footer from './landingPage/Footer';
import AboutUs from './landingPage/AboutUs';
import SponsorsForm from './landingPage/SponsorsForm';
import Talent from './landingPage/Talents'

const LandingPage = () => {


   
     return(
         <>
            <Header/>
            <Main/>
            <Talent/>
            <Sponsor/>
            <SponsorsForm/>
            <Testimonial/>
            <AboutUs/>
            <ContactUs/>
            <Footer/>
         </>
     )
}
export default LandingPage;