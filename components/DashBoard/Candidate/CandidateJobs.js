import Jobs from './CandidateComponent/Jobs';

import sponsor1 from '../../../images/sponsor13.png';
import CandidateHoc from './CandidateHoc';

const CandidateJobs = () => {

    return(

      <CandidateHoc>
          <h1 className="text-xl font-semibold my-3 text-center basis-1">My Jobs </h1>
          <h1 className="basis-0"></h1>
          <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/>
      </CandidateHoc>
            
    )
}

export default CandidateJobs;