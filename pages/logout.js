import { useEffect } from "react";
import {
  DELETE_COMPANY_SLUG,
  DELETE_USER_SLUG,
} from "../misc/helpers/authTokenManager";
import { useRouter } from "next/router";
import Loader from "../misc/Loader";

const logout = () => {
  const router = useRouter();

  useEffect(() => {
    DELETE_USER_SLUG();
    DELETE_COMPANY_SLUG();
    router.push("/candidate/login");
  }, []);
  return (
    <Loader />
  );
};

export default logout;
