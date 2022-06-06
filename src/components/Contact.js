import email from "../media/logos/email-logo.png"
import github from "../media/logos/github-logo.png"
import linkedin from "../media/logos/linkedin-logo.png"

function Contact() {

    return (
    <div className="contact">
        <h1 className="component-title" id="contact-title">Contact</h1>
        <div className="contact-section">
            <div className="contact-blurb">
                <h3>I'm currently located in Boulder, CO. I am open to remote work as well as poossible relocation. Feel free to reach out with any propective projects or just to say hello. Thank you for stopping by to check out my portfolio.</h3>
            </div>
        <div className="contact-link-holder">
            <div className="contact-link">
                <img src={email} alt="email symbol" className="logo" />
                <a href="mailto:musher516@gmail.com">musher516@gmail.com</a>
            </div>
            <div className="contact-link">
                <img src={linkedin} alt="linkedin symbol" className="logo" />
                <a href="https://www.linkedin.com/in/jmusher/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="contact-link">
                <img src={github} alt="github symbol" className="logo" />
                <a href="https://github.com/jeremymusher" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Contact