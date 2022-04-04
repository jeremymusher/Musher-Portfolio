import react from "react";
import employeeFinder from "../media/employee-finder.png"
import diy from "../media/diy.png"
import weather from "../media/weather-or-not.png"
import memoryGame from "../media/memory-game.png"

function Projects() {

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-holder">

          <div className="project">
            <div className="image-holder"> 
                <img src={weather} alt="weather-or-not screenshot" className="image"/>
            </div>
                <a href="https://musherweatherornot.herokuapp.com/" target="_blank" rel="noreferrer">Live Link</a>
                <br/>
                <a href="https://github.com/jeremymusher/Weather-Or-Not">Repo</a>
          </div>

          <div className="project">
            <div className="image-holder"> 
                <img src={employeeFinder} alt="employee finder screenshot" className="image"/>
            </div>
          </div>

          <div className="project">
            <div className="image-holder"> 
                <img src={diy} alt="diy screenshot" className="image"/>
            </div>
          </div>

          <div className="project">
            <div className="image-holder"> 
                <img src={memoryGame} alt="flashcard memory game screenshot" className="image"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Projects