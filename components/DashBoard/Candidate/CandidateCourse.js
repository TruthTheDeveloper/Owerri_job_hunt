import Courses from './CandidateComponent/Courses';
import CandidateHoc from './CandidateHoc';

const CandidateCourse = () => {

    return(

      <CandidateHoc>
          <Courses/> 
          <Courses/>
          <Courses/> 
          <Courses/>
      </CandidateHoc>
            
    )
}

export default CandidateCourse;