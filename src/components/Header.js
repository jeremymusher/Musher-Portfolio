function Header() {

    return (
    <div className="header">
        <h1>Header</h1>
        <nav className="navbar">
            <a href="/aboutme"><button>About</button></a>
            <a href="/"><button>Projects</button></a>
            <a href="/contact"><button>Contact</button></a>
        </nav>
        <div id="hello">
        <h2 className="intro">Hi, I am Jeremy Musher, full-stack Software Engineer.</h2>
     </div>

     <div id="hello-blurb">
        <h3 className="intro-sub-text"> I am an outgoing individual with a desire to work with others in improving the lives of those around me. I'm open to work and growing my network with like-minded collaborators. Drop me a line and say hi!</h3>
     </div>

    </div>
    )
}

export default Header