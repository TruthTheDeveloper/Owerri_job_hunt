import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../misc/Loader";
import UserResendActivationEmail from "../../../store/dispatchers/Auth/User/UserResendAccountActivationEmail";

const Candidate = ({ isCompany }) => {
  
  const { loading: AppLoading } = useSelector(
    (state) => state.AppLoadingReducer.loading
  );
  
  const dispatch = useDispatch();

  const handleRequestEmailResend = async (e) => {
    e.preventDefault();
    isCompany
      ? await dispatch(UserResendActivationEmail(true))
      : await dispatch(UserResendActivationEmail());
  };

  return (
    <section className="pt-80">
      <div className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2">
        <p className="py-8">
          Check your e-mail for verification link, if you {`can't`} find it in
          inbox please check your spam folder
        </p>
        <button
          onClick={handleRequestEmailResend}
          className={`w-48 mx-auto h-12 text-white rounded-full my-6 text-lg ${
            AppLoading && "btn-loading"
          }`}
          style={{ backgroundColor: "#14A800" }}
        >
            {AppLoading ? <Loader color="#fff" /> : "Resend Mail"}
          
        </button>
      </div>
    </section>
  );
};

export default Candidate;
