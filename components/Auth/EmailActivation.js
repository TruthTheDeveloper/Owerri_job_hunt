import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmailValidationDispatcher, {
  resetEmailActivationStoreState,
} from "../../store/dispatchers/Auth/User/EmailValidation";
import Loader from "../../misc/Loader";
import { useRouter } from "next/router";

const EmailActivation = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const EmailValidationReducer = useSelector(
    (state) => state.EmailActivationReducer
  );

  useEffect(async () => {
    typeof router.query.token === "string" &&
      (await dispatch(EmailValidationDispatcher(router.query.token)));
  }, [router.query.token]);

  useEffect(() => {
    if (EmailValidationReducer.message.length > 0) {
      if (!EmailValidationReducer.error) {
        dispatch(resetEmailActivationStoreState());
        EmailValidationReducer.user.company
          ? router.push("/buisness/login")
          : router.push("/candidate/login");
      }
    }
  }, [EmailValidationReducer.message]);

  return <Loader />;
};

export default EmailActivation;
