import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CHECK_USER_SLUG_EXISTS } from '../../../misc/helpers/authTokenManager';
import { useRouter } from "next/router";
import GetUserFromSlugDispatcher from '../../../store/dispatchers/Auth/User/GetUserFromSlug';


const  index = () =>{
    const router = useRouter();
    const dispatch = useDispatch();
    const { user,error,success, message,token } = useSelector(state => state.GetUserFromSlug);
    useEffect( async ()=>{
        await handleVerifyUserToken();
    }, []);

    useEffect(()=>{
      if(message.length > 0){
        if(success && !error && user?.id){
          router.push("/dashboard/candidate/course")
        }
      }
    }, [ success, user, error, message,token]);

    const handleVerifyUserToken = async ()=>{
        CHECK_USER_SLUG_EXISTS()? dispatch(GetUserFromSlugDispatcher()) :router.push("/candidate/login")
    }
  return (
    <div>

    </div>
  )
}

export default index