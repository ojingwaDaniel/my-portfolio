import './main-content.css'
import AboutMe from '../AboutMe/AboutMe';
import Intro from '../intro/intro';
export default function MainContent(){
    return (
      <div className='main-content'>
        <Intro/>
        <AboutMe/>
      </div>
    );
}