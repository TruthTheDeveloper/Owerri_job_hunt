import React from "react";
import "./styles/Pricing.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { CompanyPaymentTypes } from "../../misc/__consts__";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import UpdateCompanyPlanDispatcher from "../../store/dispatchers/Auth/Company/UpdateCompanyPlan";

const PricingComponent = ({ index }) => {
  const paymentType = CompanyPaymentTypes[index];
  const dispatch = useDispatch();
  const GetCompanyFromSlug = useSelector((state) => state.GetCompanyFromSlug);


  const config = () => ({
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLICKEY,
    tx_ref: Date.now(),
    amount: paymentType.PRICING,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: GetCompanyFromSlug.company.company_email_address,
      phonenumber: GetCompanyFromSlug.company.company_mobile_contact,
      name: GetCompanyFromSlug.company.company_name,
    },
    customizations: {
      title: paymentType.PLANTYPE,
      description: "Payment for job hunt plan",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  });


  const ContinuePaymentCompletion = async status =>{
      dispatch(UpdateCompanyPlanDispatcher({ company_id: GetCompanyFromSlug.company.id, company_current_plan: paymentType.PLANTYPE}));
      if(status.status === "successful"){
        toast.error("Payment was Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
      }else{
        toast.error("Error Completing your payment, window will reload in 5s", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
              window.location.reload();
          }, 5000);
      }
  }

  const HandleFlutterPayment = useFlutterwave(config());


  return (
    <>
      <section className="m-20 sm:mx-48 md:mx-6 lg:mx-14 xl:mx-20 basis-1/3 cursor-pointer border-first-button scroll-to-section transform-color hover:bg-green-700 transition-all hover:text-white">
        <div className=" rounded-md shadow-2xl hover:text-white">
          <div className="py-6 text-center ">
            <h1 className="text-2xl font-semibold">{paymentType.PLANTYPE}</h1>
            <h1 className="py-6 text-xl">#{paymentType.PRICING}</h1>
          </div>
          {paymentType.BENEFITS.map((b) => (
            <div key={b} className="py-6 text-center border-current">
              <h2>{b}</h2>
            </div>
          ))}

          <div className="py-6 text-center">
            <button
              className="bg-green-600 px-10 py-2 text-white rounded-full hover:bg-white hover:text-black font-semibold shadow-md"
              onClick={() => {
                HandleFlutterPayment({
                  callback: (response) => {
                    ContinuePaymentCompletion(response);
                    closePaymentModal(); // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingComponent;
