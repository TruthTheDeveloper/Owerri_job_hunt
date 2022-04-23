import Courses from './CandidateComponent/Courses';
import CandidateHoc from './CandidateHoc';

const CandidateCourse = () => {

    return(

      <CandidateHoc>
          <Courses title={'Introduction to Digital Marketing'} time={'8am'} description={'We will explore the history and evolution of adverising and Marketing'}/> 
          <Courses title={'Digital Marketing Strategy'} time={'12am'} description={'We will Give up a framework to help you understand marketing at th fundamental level,'}/>
          <Courses title={'Content Marketing'} time={'12am'} description={'You will learn how to plan your content marketing,how to develop content taht works well for your target audience and a local context, and how to measure its impact,'}/> 
          <Courses title={'Social Media Management'} time={'12am'} description={'As a brand of marketing specialist, it is imporatnt to unerstand how to use social msedia for brand growth,'}/>
          {/* <Courses title={'Web Ux for Marketing Acquisition & Conversion'} time={'12am'} description={'You will learn how your site user Experince can help improve conversion and leads site Layout'}/> */}
          {/* <Courses title={'Search Engine Optimization(SEO)'} time={'12am'} description={'Learn how to optimize your search engine presence through on-site and off-site activities, including how to target keywordlist and execute a link-building campaign'}/>
          <Courses title={'Media Buying'} time={'12am'} description={'We will focus on how to leverage the right Media channels and platform and develop content that convers on these platforms'}/>
          <Courses title={'Email Marketing'} time={'12am'} description={'You learn how to create an email marketing strategy, create and execute email campaign and measure the result'}/>
          <Courses title={'Data Analytics & Reporting'} time={'12am'} description={'We will show you how to track down action that happen online and how to impacts your buisness'}/>
          <Courses title={'Roll-Out and Take to Market Strategy'} time={'12am'} description={'Here you would learn our to set realistic goals, budget and timelines for campaign success'}/> */}
      </CandidateHoc>
            
    )
}

export default CandidateCourse;