import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompanyPaymentTypes } from "../../misc/__consts__";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import SingleBusinessPlan from "./SingleBusinessPlan";

const BuisnessPlan = () => {
  const GetCompanyFromSlug = useSelector((state) => state.GetCompanyFromSlug);


  const config = p => ({
    public_key: "FLWPUBK-d2542a2ff7622c1994ace0b074b9a6ea-X",
    tx_ref: Date.now(),
    amount: p.PRICING,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {

      email: GetCompanyFromSlug.company?.registered_by?.email,
      phonenumber: GetCompanyFromSlug.company?.company_mobile_contact,
      name: GetCompanyFromSlug.company?.company_name,

    },
    customizations: {
      title: p.PLANTYPE,
      description: "Payment for job hunt plan",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },

  });

  const handleFlutterPayment = useFlutterwave(config);


  

  const ContinuePaymentCompletion = async (status) => {
    
    if (status.status === "successful") {
        dispatch(
            UpdateCompanyPlanDispatcher({
              company_id: GetCompanyFromSlug.company.id ,
              company_current_plan: PAYMENTTYPE.PLANTYPE,
            })
          );
    } else {
        dispatch(Toast({ error:true, message:"Payment Not Completed"}))
    }
 
  }
  return (
    <div className="py-48">
      <div className="flex flex-col md:flex-row  mx-auto justify-center">
        {CompanyPaymentTypes.map((p) => {
          return (
            <SingleBusinessPlan
              key={p.PRICING}
              p={p}
              config={config(p)}
            />
          );
        })}
      </div>
    </div>
  );

};
export default BuisnessPlan;
