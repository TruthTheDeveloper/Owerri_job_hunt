import React, { useEffect } from "react";
import Head from "next/head";
import NavBar from "../page/landingPage/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RESET_APP_TOAST } from "../../store/Actions/Utils/Toast";



const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  const { message:AppToastMessage, error:AppToastError } = useSelector((state) => state.AppToast);
  
  useEffect(() => {
    if(AppToastMessage.length > 0){
        AppToastError
        ? toast.error(AppToastMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : toast.success(AppToastMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            dispatch({
              type:RESET_APP_TOAST
            })
          }, 4000);
    } 

  }, [ AppToastMessage ]);
  return children;
};

const Layout = (props) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Wrapper>{props.children}</Wrapper>
    </>
  );
};
export default Layout;
