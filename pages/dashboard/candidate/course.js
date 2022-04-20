import { useState } from 'react';
import CandidateCourse from '../../../components/DashBoard/Candidate/CandidateCourse';
import AuthContext from '../../../context/auth-context';


const CoursePage = () => {

  const [week, setWeek] = useState('Week 1')
    
  return <AuthContext.Provider value={{week, setWeek}}>
    <CandidateCourse />
  </AuthContext.Provider>
};

export default CoursePage;
