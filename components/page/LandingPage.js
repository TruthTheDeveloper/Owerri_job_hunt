import Header from './landingPage/Header';
import Main from './landingPage/Main';
import React, {useState} from 'react'
import Lottie from 'react-lottie';
import * as animationData from './pinjump.json';

const LandingPage = () => {

    const[isStopped, setIsStopped] = useState(false)
    const[isPaused, setIsPaused] = useState(false)

    const buttonStyle = {
        display: 'block',
        margin: '10px auto'
      };

      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
   
     return(
         <>
            <Header/>
            <Main/>

            <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
      <button style={buttonStyle} onClick={() => setIsStopped(true)}>stop</button>
      <button style={buttonStyle} onClick={() => setIsStopped(false)}>play</button>
      <button style={buttonStyle} onClick={() => setIsPaused(prev => !prev)}>pause</button>
         </>
     )
}
export default LandingPage;