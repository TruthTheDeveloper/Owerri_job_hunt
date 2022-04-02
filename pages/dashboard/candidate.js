import { useEffect } from "react";
import { CHECK_USER_SLUG_EXISTS } from "../../misc/helpers/authTokenManager";
import { useRouter } from "next/router";

const Candidate = () => {
    const router = useRouter();
    useEffect(async()=>{
        !(await CHECK_USER_SLUG_EXISTS()) && router.push("/candidate/login");
    }, [] );
  return (
    <div className="">
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="my-5 mx-5 md:mx-10 md:my-10"
      >
        {/* <h1 className="text-5xl">
        Owerri <span style={{ color: DEFAULT_COLOR }}>JobHunt</span>
      </h1> */}
        <h1 className="lg:text-4xl text-3xl font-bold  ">
          Owerri <span className="text-green-700">JobHunt</span>
        </h1>
      </div>
      <section
        className="flex  lg:flex-row  my-5 mx-5 md:mx-10 md:my-10  rounded-md shadow-md"
        style={{ backgroundColor: "#E8EEF3" }}
      >
        <section className="hidden lg:block  pt-44 ml-12">
          <ul className="bg-white shadow-md rounded-sm pl-4 w-48">
            <li className="py-2 text-blue-700">All topics</li>

            {/* <TopList topics={topicList} /> */}
          </ul>
        </section>

        <section>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="flex justify-center my-5">
              <h1 className="mr-3  lg:pt-12 lg:text-2xl">
                <span className="text-xl font-semibold mr-2 lg:text-4xl ">
                  Hello
                </span>
                {/* {GetUserFromSlugState.user.full_name} */} Henry Truth
              </h1>
              <img alt="text" className="w-8 lg:mt-12 lg:w-14" />
            </div>
            {/* {GetUserFromSlugState.user.is_super && ( */}
            <div className="lg:mb-10 mx-auto lg:mx-0">
              <button
                onClick={() => setShowButtonCard((prev) => !prev)}
                className="py-2 lg:mt-16 lg:ml-14 text-white w-24  rounded-lg shadow-md mb-2 bg-slate-100"
                // style={{ backgroundColor: ""}}
              >
                {" "}
                + Create
              </button>
            </div>
            {/* )} */}

            {/* {showButtonCard && <ButtonCard />} */}
            {/* <InputModal/> */}
          </div>
          {/* {GetTopicState.loading ? ( */}
          {/* <Loader width="50" height="50" /> */}
          {/* ) : ( */}
          {/* <Accordion topics={topicList} /> */}
          {/* )} */}
        </section>
      </section>
    </div>
  );
};

export default Candidate;
