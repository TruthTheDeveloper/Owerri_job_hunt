import Jobs from './CandidateComponent/Jobs';

import sponsor1 from '../../../images/sponsor13.png';
import sponsor2 from '../../../images/sponsor4.jpg';
import sponsor5 from '../../../images/sponsor5.jpg';
import sponsor6 from '../../../images/sponsor6.png';
import sponsor4 from '../../../images/sponsors4.png';
import sponsor8 from '../../../images/sponsor8.png';
import sponsor12 from '../../../images/sponsor12.png';
import sponsor10 from '../../../images/sponsor10.png';

import CandidateHoc from './CandidateHoc';

const CandidateJobs = () => {

    return(

      <CandidateHoc>
          <h1 className="text-xl font-semibold my-3 text-center basis-1">My Jobs </h1>
          <div className="grid xl:grid-cols-2 justify-center">
          {/* <h1 className="basis-0"></h1> */}
          <Jobs image={sponsor1} jobTitle={'Talent Manager'} jobDescription={'Counsel talent concerning professional matters'} location={'Apapa, lagos, Nigeria (Remote)'}/>
          <Jobs image={sponsor2} jobTitle={'Digital Marketer'} jobDescription={' boost brand awareness while driving traffic to acquire new customers'} location={'aldinma, Owerri, Nigeria (Remote)'}/>
          <Jobs image={sponsor5} jobTitle={'Content Writer'} jobDescription={'create print and digital content for companies that provides information or showcases the products or services they offer'} location={'aldinma, Owerri, Nigeria (Remote)'}/>
          <Jobs image={sponsor6} jobTitle={'Sales Manager'} jobDescription={'lead sales teams to reach sales targets,setting quotas, evaluating and adjusting performance.'} location={'aldinma, Owerri, Nigeria (Remote)'}/>
          <Jobs image={sponsor4} jobTitle={'Product Designer'} jobDescription={'responsible for the design and development of consumer products'} location={'aldinma, Owerri, Nigeria (Remote)'}/>
          <Jobs image={sponsor8} jobTitle={'Digital Marketer'} jobDescription={'boost brand awareness while driving traffic to acquire new customers'} location={'aldinma, Owerri, Nigeria (Remote)'}/>
          <Jobs image={sponsor12} jobTitle={'Project Manager'} jobDescription={'responsible for planning, organizing, and directing the completion of specific projects'} location={'aldinma, Owerri, Nigeria (Remote)'}/>
          <Jobs image={sponsor10} jobTitle={'Digital Marketer'} jobDescription={'boost brand awareness while driving traffic to acquire new customers'} location={'aldinma, Owerri, Nigeria (Remote)'}/>
          {/* <Jobs image={sponsor1}/>
          <Jobs image={sponsor1}/> */}
          </div>
      </CandidateHoc>
            
    )
}

export default CandidateJobs;