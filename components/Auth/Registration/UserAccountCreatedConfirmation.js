import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserResendActivationEmail from "../../../store/dispatchers/Auth/User/UserResendAccountActivationEmail";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../misc/Button";
import Loader from "../../../misc/Loader";

const UserAccountCreatedConfirmation = ({ isCompany }) => {
  const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);
  const UserResendActivationEmailData = useSelector(
    (state) => state.ResendUserAccountActivation
  );
  const dispatch = useDispatch();



  const handleRequestEmailResend = async (e) => {
    e.preventDefault();
    isCompany
      ? await dispatch(UserResendActivationEmail())
      : await dispatch(UserResendActivationEmail(true));
  };

  return (
    <div
      style={{
        display: "block",
        margin: "31px auto",
        padding: "7rem 2rem",
        width: "40%",
        background: "beige",
      }}
    >
      <div className="notification success">
        Success! Your Acccount was created successfully, please check your email
        to continue.If you could not find your email on the mails folder, check
        your spam folder too.
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            opacity: AppLoading ? "0.5" : "1",
            pointerEvents: AppLoading ? "none" : "all",
            padding: "0.3rem",
          }}
          className="border-first-button scroll-to-section"
          onClick={handleRequestEmailResend}
        >
          <Button
            title={
              AppLoading ? (
                <Loader small width="1rem" height="1rem" color="#fff" />
              ) : (
                "Resend Activation Email?"
              )
            }
            disabled={AppLoading}
            onClick={handleRequestEmailResend}
          />
        </div>
      </div>
    </div>
  );
};

export default UserAccountCreatedConfirmation;
