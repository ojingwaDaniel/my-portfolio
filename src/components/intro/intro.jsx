import './intro.css'
export default function Intro (){
    return (
      <div className="intro">
        <h1 id="name">Hi I'm</h1>
        <h1 id="name">Daniel</h1>
        <div className="overview">
          <p>
            A frontend developer with a knack for turning designs into
            interactive, user-focused websites. Always striving to create
            visually stunning and intuitive interfaces. I'm passionate about
            staying updated with the latest technologies to deliver top-notch
            experiences.
          </p>
          <img
            src="https://avatars.githubusercontent.com/u/79636701?s=400&u=8316ed69787aa0d472d74e70182dbaa09d51c985&v=4"
            alt="NoImage"
            className="my-photo"
          />
        </div>
      </div>
    );
}