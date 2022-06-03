function About() {

  return (
   <div className="about">

     <h2>About</h2>

     <div id="about-blurb">
        <h3 className="aboutme"> Hello, I am Jeremy Musher. I design and build websites and applications. I am a full-stack software engineer, with knowledge of front-end frameworks, database management systems and APIs. See below for a full list of languages, frameworks, and databases that I have used.</h3>
     </div>

     <div className="skills">
     <div className="skill-section">
       <h2>Languages</h2>
        <div className="list">
            <p>Javascript</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Python</p>
        </div>
      </div>
      <div className="skill-section">
       <h2>Libraries and Frameworks</h2>
       <div className="list">
            <p>ReactJS</p>
            <p>Django</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Mongoose</p>
        </div>
      </div>
      <div className="skill-section">
       <h2>Databases</h2>
       <div className="pst">
            <p>PostgreSQL</p>
            <p>MongoDB</p>
        </div>
      </div>
     </div>
     <h2>When I'm Not Coding...</h2>
     <h3 id="aboutme-cont">Besides developing applications, I am also an avid live music attendee, outdoor enthusiast, and environmental advocate. I also enjoy exploring the beauty of the Colorado front range, nerding out on podcasts, attending trivia at our local brewery, and being a dog-dad to my goofy pup, Moose. Know of any interesting hiking spots or fun podcasts i should check out? Visit my contact page and share your suggestions!</h3>
   </div>
  )
}
export default About