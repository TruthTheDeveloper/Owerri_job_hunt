import { useState, useEffect } from "react";
import AddSponsorShipDispatcher, {
    resetSponsorshipState
  } from "../../../store/dispatchers/Service/Sponsorship";
  import Loader from "../../../misc/Loader";
import { useDispatch, useSelector } from "react-redux";



const ErrorText = ({ text }) => (
    <span style={{ color: "crimson", fontSize: "1rem", display:"block", margin:"auto" }}>{text}</span>
  );
  

const SponsorsForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    website: "",
  });
  const [ emailValidation, setEmailValidation ] = useState("");
  const [ websiteValidation, setWebsiteValidation ] = useState("");

  const { message: SponsorMessage, error: SponsorError, success:SponsorSuccess } = useSelector(
    (state) => state.SponsorshipReducer
  );
  const dispatch = useDispatch();
  const { loading:AppLoading } = useSelector((state) => state.AppLoadingReducer);

  useEffect(() => {
    if (!SponsorError && SponsorMessage && SponsorSuccess) {
      setFormData({
        email: "",
        website: "",
      });
      setEmailValidation("");
      setWebsiteValidation("");
      dispatch(resetSponsorshipState());
    }
  }, [SponsorError, SponsorMessage]);

  const HandleJoinSponsors = (e) => {
    e.preventDefault();
    let { email, website } = formData;

    email.length < 1
      ? setEmailValidation("Please enter your email")
      : setEmailValidation("");

    website.length < 1
      ? setWebsiteValidation("Please enter your website address")
      : setWebsiteValidation("");

    if (website.length > 0 && email.length > 0) {
      dispatch(AddSponsorShipDispatcher({ email, website }));
    }
  };

  return (
    <section className="my-48">
      <h1 className="text-3xl text-center font-semibold mt-24">
        Partner With Us
      </h1>
      <h1 className="text-2xl font-semibold text-center mt-14 mb-24">
        Lets add Owerri to the map, where buisnesses meet talents
      </h1>
      <form
        onSubmit={HandleJoinSponsors}
        className="flex flex-col md:flex-row justify-center shadow-lg border-2 h-96 md:h-24  lg:mx-28 xl:mx-52 rounded-full "
      >
        {/* please read this comment
        change this validation to buisness name instaed of website url */}
        <input
          placeholder="Buisness Name"
          className="h-16 border-2  mt-4 pl-2 rounded-full outline-none mx-auto w-9/12 md:w-full md:mx-4"
          style={{ borderColor: "#3C8224" }}
          onChange={ e=> setFormData({...formData, website:e.target.value})}
          value={ formData.website }
        />
        {
            websiteValidation.length > 0 && <ErrorText text={ websiteValidation } />
        }
        <input
          placeholder="Buisness email"
          className="h-16 border-2  rounded-full  mt-4 pl-2 outline-none border-green-600 w-10/12 mx-auto md:w-full md:mx-4"
          style={{ borderColor: "#3C8224" }}
          onChange={ e=> setFormData({...formData, email:e.target.value})}
          value = { formData.email }
        />
        {
            emailValidation.length > 0 && <ErrorText text={ emailValidation } />
        }

        <input
          placeholder="(+country code)xxx phoneNumber"
          className="h-16 border-2  rounded-full placeholder:text-xs  mt-4 pl-2 outline-none border-green-600 w-11/12 mx-auto md:w-full md:mx-4"
          style={{ borderColor: "#3C8224" }}
          onChange={ e=> setFormData({...formData, email:e.target.value})}
          value = { formData.email }
        />
        {
            emailValidation.length > 0 && <ErrorText text={ emailValidation } />
        }
        <button
        className={`bg-green-600 h-16 w-48 xl:mx-12 text-white text-xl rounded-full  mt-4 pl-2 md:w-full md:mr-2 mx-auto  ${
            AppLoading && "btn-loading"
          }`}
          style={{ backgroundColor: "#3C8224" }}
        >
            {
                AppLoading ? <Loader color="#fff" />:"Submit"
            }
          
        </button>
      </form>
    </section>
  );
};

export default SponsorsForm;
