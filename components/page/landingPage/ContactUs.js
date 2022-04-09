import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactUsDispatcher, {
  resetContactUsState,
} from "../../../store/dispatchers/Service/ContactUs";
import Loader from "../../../misc/Loader";

const ErrorText = ({ text }) => (
  <span style={{ color: "crimson", fontSize: "1rem" }}>{text}</span>
);

const ContactUs = () => {
  const dispatch = useDispatch();
  const { loading: AppLoading } = useSelector(
    (state) => state.AppLoadingReducer
  );
  
  const [ messageValidationError, setMessageValidationError ] = useState("");
  const [ emailValidationError, setEmailValidationError ] = useState("");
  const [ subjectValidationError, setSubjectValidationError ] = useState("");
  const [ nameValidationError, setNameValidationError ] = useState("");



  const {
    error: ContactUsError,
    message: ContactUsMessage,
    loading: ContactUsLoading,
    success: ContactUsSuccess,
  } = useSelector((state) => state.ContactUsReducer);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (!ContactUsError && ContactUsSuccess && ContactUsMessage.length > 0) {
      setContact({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      dispatch(resetContactUsState());
    }
  }, [ContactUsError, ContactUsMessage, ContactUsLoading]);

  const handleSendContactUsMessage = (e) => {
    e.preventDefault();

    contact.name.length < 1
      ? setNameValidationError("Please input Your Name")
      : setNameValidationError("");
    contact.email.length < 1
      ? setEmailValidationError("Please input Your Email")
      : setEmailValidationError("" );
    contact.subject.length < 1
      ? setSubjectValidationError("Please input subject")
      : setSubjectValidationError("");
    contact.message.length < 1
      ? setMessageValidationError("Please input your message")
      : setMessageValidationError("");

    contact.name.length > 1 &&
      contact.email.length > 1 &&
      contact.message.length > 1 &&
      contact.subject.length > 1 &&
      dispatch(
        ContactUsDispatcher({
          email: contact.email,
          message: contact.message,
          name: contact.name,
          subject: contact.subject,
        })
      );
  };

  return (
    <section id="contact-us" className="my-48">
      <form
        className=" lg:w-5/12 mx-auto flex flex-col justify-center shadow-xl"
        onSubmit={handleSendContactUsMessage}
      >
        <h1 className="text-center text-3xl font-medium mb-24">Contact Us</h1>
        <div className="flex flex-col justify-center mx-16">
          <input
            className="h-10 border-0 border-green-500 border-b-2 outline-none placeholder:text-black  placeholder:text-lg"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          { nameValidationError.length > 0 && <ErrorText text={ nameValidationError } />}
        </div>

        <div className="flex flex-col justify-center mx-16 mt-8">
          <input
            className="h-10 border-0 border-green-500 border-b-2 outline-none placeholder:text-black  placeholder:text-lg"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          {emailValidationError.length > 0 && <ErrorText text={emailValidationError} />}
        </div>

        <div className="flex flex-col justify-center mx-16 mt-8">
          <input
            className="h-10 border-0 border-green-500 border-b-2 outline-none placeholder:text-black  placeholder:text-lg"
            placeholder="Subject"
            value={contact.subject}
            onChange={(e) =>
              setContact({ ...contact, subject: e.target.value })
            }
          />
          {subjectValidationError.length > 0 && (
            <ErrorText text={subjectValidationError} />
          )}
        </div>

        <div className="flex flex-col justify-center mx-16 mt-8">
          <input
            className="h-10  border-0 border-green-500 border-b-2 outline-none placeholder:text-black  placeholder:text-lg"
            placeholder="Message"
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
          />
          { messageValidationError.length > 0 && (
            <ErrorText text={ messageValidationError } />
          )}
        </div>
        <div className="py-8">
          <button
            className={`px-24 mt-8 py-4 mx-auto flex rounded-full text-white text-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg ${
              AppLoading && "btn-loading"
            }`}
            style={{ backgroundColor: "#14A800" }}
          >
            {AppLoading ? <Loader color={"#fff"} /> : "Contact US"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
