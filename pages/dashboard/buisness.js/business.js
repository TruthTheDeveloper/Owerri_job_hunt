import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHECK_BUSINESS_SLUG_EXISTS,
  DELETE_COMPANY_SLUG,
  GET_COMPANY_SLUG,
} from "../../../misc/helpers/authTokenManager";
import { useRouter } from "next/router";
import GetCompanyFromSlug from "../../../store/dispatchers/Auth/Company/GetUserFromSlug";
import BuisnessPlan from "../../../components/Plan/BuisnessPlan";
import Loader from "../../../misc/Loader";
import CompanyActive from "../companyActive";

const Business = () => {
  const GetCompanyFromSlugState = useSelector(
    (state) => state.GetCompanyFromSlug
  );
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    console.log(GetCompanyFromSlugState);
  });

  useEffect(async () => {
    !(await CHECK_BUSINESS_SLUG_EXISTS()) && router.push("/business/login");
    dispatch(GetCompanyFromSlug(await GET_COMPANY_SLUG()));
  }, []);

  useEffect(async () => {
    if (GetCompanyFromSlugState.message.length > 0) {
      if (GetCompanyFromSlugState.error) {
        await DELETE_COMPANY_SLUG();
        router.push("/buisness/login");
      }
    }
  }, [GetCompanyFromSlugState]);

  return GetCompanyFromSlugState.loading ? (
    <Loader small={false} width={"100%"} height={"100%"} color="black" />
  ) : false ? (
    <CompanyActive />
  ) : (
    <BuisnessPlan />
  );
};

export default Business;
