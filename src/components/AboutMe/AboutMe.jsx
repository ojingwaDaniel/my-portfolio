import './AboutMe.css'
export default function AboutMe(){
    return (
        <div id ="About">
          <h1 className='about-intro'>
            INTRODUCTION
            <br />
            Overview.
          </h1>

          <div className="about-me">
            <p>
              <span>
                I'm 21 and a Mathematics student based based in Nigeria. I have
                a strong passion for the technologies related to the data base
                construction and UX.
              </span>
              <span>
                Outside of my regular activities,im into Sport Analysis whenever
                I have some free time. I'm also love Music a lot it's give's me
                peace of mind .
              </span>
              <span>
                I'm continuously thrilled to partner with individuals and teams
                who wholeheartedly embrace my fervor for crafting extraordinary
                experiences. Your visit to my portfolio is deeply appreciated !
              </span>
            </p>
            <img
              src="https://images.unsplash.com/photo-1511376777868-611b54f68947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmQlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
    );
}