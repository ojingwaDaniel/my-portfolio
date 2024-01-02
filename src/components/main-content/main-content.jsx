import './main-content.css'
import AboutMe from '../AboutMe/AboutMe';
import Intro from '../intro/intro';
import MySkills from '../my-skills/my-skills';
export default function MainContent(){
    return (
      <div className='main-content'>
        <Intro/>
        <AboutMe/>
        <MySkills/>
      </div>
    );
}