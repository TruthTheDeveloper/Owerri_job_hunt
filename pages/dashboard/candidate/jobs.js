import CandidateJobs from '../../../components/DashBoard/Candidate/CandidateJobs';
import { useState } from 'react';
import AuthContext from '../../../context/auth-context';

const JobsPage = () => {
  const [week, setWeek] = useState('Week 1')

  return <AuthContext.Provider value={{week, setWeek}}>
      <CandidateJobs/>
  </AuthContext.Provider>
};

export default JobsPage;
