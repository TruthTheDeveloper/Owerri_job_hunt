import { useState, useEffect, useRef } from "react";
import Loader from "../../misc/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import GetUserFromSlugDispatcher from "../../store/dispatchers/Auth/User/GetUserFromSlug";
import { CHECK_USER_SLUG_EXISTS } from "../../misc/helpers/authTokenManager";
import UpdateUserProfileDispatcher from "../../store/dispatchers/Profile/User/Update";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Candidate = () => {
  const router = useRouter();
  const profileFormRef = useRef(null);
  const [userProfileExists, setUserProfileExists] = useState(false);
  const dispatch = useDispatch();
  const { loading: AppLoading } = useSelector(
    (state) => state.AppLoadingReducer
  );
  const { user, error, success, message, token } = useSelector(
    (state) => state.GetUserFromSlug
  );

  useEffect(() => {
    CHECK_USER_SLUG_EXISTS()
      ? dispatch(GetUserFromSlugDispatcher())
      : router.push("/candidate/login");
  }, []);

  useEffect(() => {
    if (message.length > 0) {
      console.log(success, user, error, message, token);
      if (success && !error && user?.id) {
        let {
          facebookHandle,
          first_name,
          jobRole,
          last_name,
          linkedInHandle,
          profile_image,
          resume,
          twitterHandle,
        } = user.profile;
        setCandidateProfile({
          firstName: first_name,
          lastName: last_name,
          profilePic: profile_image,
          uploadResume: resume,
          jobRole: jobRole,
          twitterHandle: twitterHandle,
          facebookHandle: facebookHandle,
          linkedlnHandle: linkedInHandle,
        });
      }
    }
  }, [success, user, error, message, token]);

  const [candidateProfile, setCandidateProfile] = useState({
    firstName: "",
    lastName: "",
    profilePic: null,
    uploadResume: null,
    jobRole: "",
    twitterHandle: "",
    facebookHandle: "",
    linkedlnHandle: "",
    githubLink: "",
  });
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    var formData = new FormData(profileFormRef.current);

    dispatch(UpdateUserProfileDispatcher(formData));
  };

  return (
    <section className="py-48 w-full flex">
      <form
        ref={profileFormRef}
        encType="multipart/form-data"
        onSubmit={handleSubmitProfile}
        className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2"
        autoComplete="on"
      >
        <h1
          className="text-center my-5 font-semibold"
          style={{ color: "#14A800" }}
        >
          COMPLETE YOUR PROFILE
        </h1>
        <div className="flex flex-row">
          <div className="py-4 w-full mr-2">
            <label>FirstName</label>
            <br />
            <input
              className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
              disabled={AppLoading}
              onChange={(e) =>
                setCandidateProfile({
                  ...candidateProfile,
                  firstName: e.target.value,
                })
              }
              value={candidateProfile.firstName}
              name="first_name"
            />
            {/* <p className="text-red-600">{nameValidation}</p> */}
          </div>
          <div className="py-4 w-full ml-2">
            <label>LastName</label>
            <br />
            <input
              className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
              disabled={AppLoading}
              onChange={(e) =>
                setCandidateProfile({
                  ...candidateProfile,
                  lastName: e.target.value,
                })
              }
              value={candidateProfile.lastName}
              name="last_name"
            />
            {/* <p className="text-red-600">{nameValidation}</p> */}
          </div>
        </div>
        <div className="py-4 w-full ">
          <label>ProfilePic</label>
          <br />
          <input
            className="h-10 w-full outline-none  mt-4  pl-2 rounded-md"
            accept="image/*"
            disabled={AppLoading}
            onChange={(e) =>
              setCandidateProfile({
                ...candidateProfile,
                profilePic: e.target.value,
              })
            }
            name="profile_image"
            id="profile_image"
            type="file"
          />
          {/* <p className="text-red-600">{nameValidation}</p> */}
        </div>
        <div className="py-4 w-full ">
          <div style={{ display: "flex", alignItems:"baseline" }}>
            {" "}
            <label>UploadResume</label>{" "}
            {
              candidateProfile.uploadResume && <a href={`https://res.cloudinary.com/dkx4uksdl/${candidateProfile.uploadResume}`} target="_blank"><FontAwesomeIcon
              style={{ color: "#14A800" }}
              icon={faCloudDownload}
              className="w-4 h-4 mx-1 mt-2 mr-3 cursor-pointer"
            /></a>
            }
            
          </div>

          <br />
          <input
            className="h-10 w-full outline-none  mt-4  pl-2 rounded-md"
            type="file"
            disabled={AppLoading}
            onChange={(e) =>
              setCandidateProfile({
                ...candidateProfile,
                uploadResume: e.target.value,
              })
            }
            name="resume"
          />

          {/* <p className="text-red-600">{nameValidation}</p> */}
        </div>
        <div className="py-4 w-full ">
          <label>JobRole</label>
          <br />
          <input
            className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
            disabled={AppLoading}
            onChange={(e) =>
              setCandidateProfile({
                ...candidateProfile,
                jobRole: e.target.value,
              })
            }
            name="jobRole"
            value={candidateProfile.jobRole}
          />
          {/* <p className="text-red-600">{nameValidation}</p> */}
        </div>
        <div className="py-4 w-full ">
          <label>TwitterHandle (optional)</label>
          <br />
          <input
            disabled={AppLoading}
            className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
            onChange={(e) =>
              setCandidateProfile({
                ...candidateProfile,
                twitterHandle: e.target.value,
              })
            }
            name="twitterHandle"
            value={candidateProfile.twitterHandle}
          />
          {/* <p className="text-red-600">{nameValidation}</p> */}
        </div>
        <div className="py-4 w-full ">
          <label>FacebookHandle (optional)</label>
          <br />
          <input
            disabled={AppLoading}
            className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
            onChange={(e) =>
              setCandidateProfile({
                ...candidateProfile,
                facebookHandle: e.target.value,
              })
            }
            name="facebookHandle"
            value={candidateProfile.facebookHandle}
          />
          {/* <p className="text-red-600">{nameValidation}</p> */}
        </div>
        <div className="py-4 w-full ">
          <label>linkedlnHandle (optional)</label>
          <br />
          <input
            disabled={AppLoading}
            className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
            onChange={(e) =>
              setCandidateProfile({
                ...candidateProfile,
                linkedlnHandle: e.target.value,
              })
            }
            name="linkedInHandle"
            value={candidateProfile.linkedlnHandle}
          />
          {/* <p className="text-red-600">{nameValidation}</p> */}
        </div>

        <button
          className={`w-48 mx-auto h-12 text-white rounded-full my-6 text-lg ${
            AppLoading && "btn-loading"
          }`}
          style={{ backgroundColor: "#14A800" }}
        >
          {AppLoading ? <Loader color="#fff" /> : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default Candidate;
