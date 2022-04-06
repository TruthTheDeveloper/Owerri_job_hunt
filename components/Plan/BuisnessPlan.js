import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompanyPaymentTypes } from "../../misc/__consts__";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import UpdateCompanyPlanDispatcher from "../../store/dispatchers/Auth/Company/UpdateCompanyPlan";
import Toast from "../../store/dispatchers/Utils/Toast";


let PAYMENTTYPE = {};
const BuisnessPlan = () => {
  const dispatch = useDispatch();
  const GetCompanyFromSlug = useSelector((state) => state.GetCompanyFromSlug);
  useEffect(() => {
    console.log(process.env.REACT_APP_FLUTTERWAVE_PUBLICKEY);
    console.log(GetCompanyFromSlug);
  });
  const config = {
    public_key: "FLWPUBK-d2542a2ff7622c1994ace0b074b9a6ea-X",
    tx_ref: Date.now(),
    amount: 1000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: GetCompanyFromSlug.company?.registered_by_?.id,
      phonenumber: GetCompanyFromSlug.company.company_mobile_contact,
      name: GetCompanyFromSlug.company.company_name,
    },
    customizations: {
      title: PAYMENTTYPE.PLANTYPE,
      description: "Payment for job hunt plan",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

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
  };

  return (
    <div className="py-48" >
      <div className="flex flex-col md:flex-row  mx-auto justify-center">
        {CompanyPaymentTypes.map((p) => {
          PAYMENTTYPE = p;
          return (
            <div key={p.PRICING} className="bg-green-500 text-center mx-4 rounded-md shadow-lg border hover:bg-white hover:text-green-700 my-4">
              <h1 className="text-3xl py-4">{p.PLANTYPE}</h1>
              <p className="text-2xl">{p.PRICING}</p>
              <h1 className="text-2xl py-2">Free</h1>
              <ul className="text-lg mt-5">
                <li className="my-3">Social media buisness profile</li>
                <li className="my-3">optimization</li>
                <li className="my-3">Google business listing</li>
                <li className="my-3 mx-4">
                  Buisness documentation(video & photo coverage)
                </li>
              </ul>
              <button
                className="w-48 hover:bg-green-600 hover:text-white bg-white h-12 my-8 rounded-full shadow-md border text-xl font-semibold"
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      ContinuePaymentCompletion(response);
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                Pay
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BuisnessPlan;
