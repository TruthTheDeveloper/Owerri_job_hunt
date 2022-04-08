import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import UpdateCompanyPlanDispatcher from "../../store/dispatchers/Auth/Company/UpdateCompanyPlan";
import Toast from "../../store/dispatchers/Utils/Toast";
import { useDispatch } from "react-redux";



const SingleBusinessPlan = ({ p, config }) => {
  const dispatch = useDispatch();
  const handleFlutterPayment = useFlutterwave(config);

  const ContinuePaymentCompletion = async (status) => {
    if (status.status === "successful") {
      dispatch(
        UpdateCompanyPlanDispatcher({
          company_id: GetCompanyFromSlug.company.id,
          company_current_plan: p.PLANTYPE,
        })
      );
    } else {
      dispatch(Toast({ error: true, message: "Payment Not Completed" }));
    }
  };

  return (
    <div
      className="bg-green-500 text-center mx-4 rounded-md shadow-lg border hover:bg-white hover:text-green-700 my-4"
    >
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
          handleFlutterPayment(
            {
              callback: (response) => {
                ContinuePaymentCompletion(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            }
          );
        }}
      >
        Pay
      </button>
    </div>
  );
};

export default SingleBusinessPlan;
