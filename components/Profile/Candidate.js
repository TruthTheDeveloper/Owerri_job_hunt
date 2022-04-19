import {useState} from  'react';
import Loader from '../../misc/Loader';
import { useSelector } from 'react-redux';
import {useRouter} from 'next/router';
const Candidate = () => {

    const router = useRouter()

    const { loading:AppLoading } = useSelector(state => state.AppLoadingReducer);

    const [candidateProfile, setCandidateProfile] = useState({
        firstName:"",
        lastName:"",
        profilePic:null,
        uploadResume:null,
        jobRole:"",
        twitterHandle:"",
        facebookHandle:"",
        linkedlnHandle:"",
        githubLink:"",

    })


    const submitHandler = (e) => {
      e.preventDefault()

      router.push('/dashboard/candidate')
    }

    return(
        <section className="py-48 w-full flex">
            <form className="flex flex-col mx-auto justify-center rounded-md shadow-xl w-96 px-4 border-2" autoComplete="on">
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
                        onChange={(e) =>
                            setCandidateProfile({ ...candidateProfile, firstName: e.target.value })
                        }
                    />
                    {/* <p className="text-red-600">{nameValidation}</p> */}
                </div>
                <div className="py-4 w-full ml-2">
                    <label>LastName</label>
                    <br />
                    <input
                        className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                        onChange={(e) =>
                            setCandidateProfile({ ...candidateProfile, lastName: e.target.value })
                        }
                    />
                    {/* <p className="text-red-600">{nameValidation}</p> */}
                </div>
            </div>
            <div className="py-4 w-full ">
              <label>ProfilePic</label>
              <br />
              <input
                className="h-10 w-full outline-none  mt-4  pl-2 rounded-md"
                onChange={(e) =>
                    setCandidateProfile({ ...candidateProfile, profilePic: e.target.value })
                }
                type="file"
              />
              {/* <p className="text-red-600">{nameValidation}</p> */}
            </div>
            <div className="py-4 w-full ">
              <label>UploadResume</label>
              <br />
              <input
                className="h-10 w-full outline-none  mt-4  pl-2 rounded-md"
                type="file"
                onChange={(e) =>
                    setCandidateProfile({ ...candidateProfile, uploadResume: e.target.value })
                }
              />
              {/* <p className="text-red-600">{nameValidation}</p> */}
            </div>
            <div className="py-4 w-full ">
              <label>JobRole</label>
              <br />
              <input
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                onChange={(e) =>
                    setCandidateProfile({ ...candidateProfile, jobRole: e.target.value })
                }
              />
              {/* <p className="text-red-600">{nameValidation}</p> */}
            </div>
            <div className="py-4 w-full ">
              <label>TwitterHandle (optional)</label>
              <br />
              <input
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                onChange={(e) =>
                    setCandidateProfile({ ...candidateProfile, twitterHandle: e.target.value })
                }
              />
              {/* <p className="text-red-600">{nameValidation}</p> */}
            </div>
            <div className="py-4 w-full ">
              <label>FacebookHandle (optional)</label>
              <br />
              <input
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                onChange={(e) =>
                    setCandidateProfile({ ...candidateProfile, facebookHandle: e.target.value })
                }
              />
              {/* <p className="text-red-600">{nameValidation}</p> */}
            </div>
            <div className="py-4 w-full ">
              <label>linkedlnHandle (optional)</label>
              <br />
              <input
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                onChange={(e) =>
                    setCandidateProfile({ ...candidateProfile, linkedlnHandle: e.target.value })
                }
              />
              {/* <p className="text-red-600">{nameValidation}</p> */}
            </div>
            <div className="py-4 w-full ">
              <label>GithubLink (optional)</label>
              <br />
              <input
                className="h-10 w-full outline-none border mt-4 border-green-500 pl-2 rounded-md"
                onChange={(e) =>
                    setCandidateProfile({ ...candidateProfile, githubLink: e.target.value })
                }
              />
              {/* <p className="text-red-600">{nameValidation}</p> */}
            </div>
            <button
              className={`w-48 mx-auto h-12 text-white rounded-full my-6 text-lg ${AppLoading && 'btn-loading'}`}
              onClick={submitHandler}
              style={{ backgroundColor: "#14A800" }}
            >
                { AppLoading ? <Loader color="#fff" />:"Submit"}
            </button>
            </form>
        </section>
    )
}

export default Candidate