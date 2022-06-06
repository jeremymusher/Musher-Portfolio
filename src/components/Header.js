import headshot from "../media/headshot.jpeg"

function Header() {

    return (
    <div className="header">
        <nav className="navbar">
            <a href="/Musher-Portfolio/#/aboutme"><button>About</button></a>
            <a href="/Musher-Portfolio/#/"><button>Projects</button></a>
            <a href="/Musher-Portfolio/#/contact"><button>Contact</button></a>
        </nav>
        <div id="intro">
            <div id="hello">
                <h2>Hi, I am Jeremy Musher, full-stack Software Engineer.</h2>
                <h3> I am an outgoing individual with a desire to work with others in improving the lives of those around me. I'm open to work and growing my network with like-minded collaborators. Drop me a line and say hi!</h3>
                <a href="J.Musher-Resume-2022.pdf" download><button>Download Resume</button></a>
            </div>
            <img src={headshot} alt="Jeremy Musher Headshot" id="headshot"></img>
        </div>

    </div>
    )
}

export default Header