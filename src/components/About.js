function About() {

  return (
   <div className="about">

     <h1>About</h1>

     <div id="about-blurb">
        <h3 className="intro"> Hello, I am Jeremy Musher. I design and build websites and applications. I am a full-stack software engineer, with knowledge of front-end frameworks, database management systems and APIs.</h3>
     </div>

     {/* <a href="J.Musher-Resume-2022.pdf" target="_blank">
       <button>Resume</button>
     </a> */}

     <a href="J.Musher-Resume-2022.pdf" download><button>Download Resume</button></a>

     <div className="skills">
     <div className="skill-section">
       <h1>Languages</h1>
        <div className="list">
            <p>Javascript</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Python</p>
        </div>
      </div>
      <div className="skill-section">
       <h1>Libraries and Frameworks</h1>
       <div className="list">
            <p>ReactJS</p>
            <p>Django</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Mongoose</p>
        </div>
      </div>
      <div className="skill-section">
       <h1>Databases</h1>
       <div className="pst">
            <p>PostgreSQL</p>
            <p>MongoDB</p>
        </div>
      </div>
     </div>
     
   </div>
  )
}
export default About