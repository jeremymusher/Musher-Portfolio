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
            <div className="title-image-holder">
                <div className="project-title">
                    <h2>Weather Or Not</h2>
                </div>
                <img src={weather} alt="weather-or-not screenshot" className="image"/>
            </div>
            <div className="blurb-links-holder">
                <div className="link-holder">
                    <a href="https://musherweatherornot.herokuapp.com/" target="_blank" rel="noreferrer">
                        <button>Live</button>
                    </a>
                    <a href="https://github.com/jeremymusher/Weather-Or-Not" target="_blank" rel="noreferrer">
                        <button>Repo</button>
                    </a>
                </div>
                <div className="project-blurb">
                    <p>
                        Weather app with helpful current, 3-day, and hourly forecasts. Saves users previous search in history for omptized app-revistiation. Created using ReactJS, HTML, and CSS on the frontend and pulling backend data from a 3rd party API (weatherapi).
                    </p>
                </div>
            </div>
          </div>

          <div className="project">
            <div className="title-image-holder">
                    <div className="project-title">
                        <h2>Employee Finder</h2>
                    </div>
                    <img src={employeeFinder} alt="employee finder screenshot" className="image"/>
            </div>
            <div className="blurb-links-holder">
                    <div className="link-holder">
                        <a href="https://emergency-employee-finder.herokuapp.com/" target="_blank" rel="noreferrer">
                            <button>Live</button>
                        </a>
                        <div className="double-repo">
                            <a href="https://github.com/NealGarcia/Project-3-Front-End" target="_blank" rel="noreferrer">
                                <button>Frontend Repo</button>
                            </a>
                            <a href="https://github.com/NealGarcia/Project-3-Back-End" target="_blank" rel="noreferrer">
                                <button>Backend Repo</button>
                            </a>
                        </div>
                    </div>
                    <div className="project-blurb">
                        <p>
                            Full-stack application designed to help businesses find last minute part-time workers. Allows business to search for employees by name, age, availability, and location, and also allows potential employees to upload themselves to the database of available workers. Built using a MERN stack with full CRUD functionality. Developed with two other developers using a Scrum workflow.
                        </p>
                    </div>
            </div>
          </div>

          <div className="project">
            <div className="title-image-holder"> 
                <div className="project-title">
                <h2>DIY Tutorial Site</h2>
            </div>
                <img src={diy} alt="diy screenshot" className="image"/>
            </div>
            <div className="blurb-links-holder">
                <div className="link-holder">
                    <a href="https://musher-diy.herokuapp.com/" target="_blank" rel="noreferrer">
                        <button>Live</button>
                    </a> 
                    <div className="double-repo">
                        <a href="https://github.com/jeremymusher/DIY-frontend" target="_blank" rel="noreferrer">
                            <button>Frontend Repo</button>
                        </a>
                        <a href="https://github.com/jeremymusher/DIY-backend" target="_blank" rel="noreferrer">
                            <button>Backend Repo</button>
                        </a>
                    </div>
                </div>
                <div className="project-blurb">
                    <p>
                        Full-stack application with full CRUD functionality where users can create, update, and delete posts containing tutorial videos embedded from YouTube. The app pulls from a backend API created using the Django REST framework with a ReactJS front-end.
                    </p>
                </div>
            </div>
          </div>

          <div className="project">
            <div className="title-image-holder">
                <div className="project-title"> 
                    <h2>Flashcard Memory Game</h2>
                </div>
                <img src={memoryGame} alt="flashcard memory game screenshot" className="image"/>
            </div>
            <div className="blurb-links-holder">
                <div className="link-holder">
                    <a href="https://musher-memory.herokuapp.com/" target="_blank" rel="noreferrer">
                        <button>Live</button>
                    </a>
                    <a href="https://github.com/jeremymusher/Flashcard-Memory-Game" target="_blank" rel="noreferrer">
                        <button>Repo</button>
                    </a>
                </div>
                <div className="project-blurb">
                    <p>
                    Simple memory style flashcard game, using animal pictures to test users on their memory. Cards start face-down, with users having to find the location of matching pairs. Once all pairs are found a win-screen prompts users to try again. Built using DOM manipulation through vanilla Javascript, CSS, and HTML.
                    </p>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Projects