import email from "../media/logos/email-logo.png"
import github from "../media/logos/github-logo.png"
import linkedin from "../media/logos/linkedin-logo.png"

function Contact() {

    return (
    <div className="contact">
        <h1 className="component-title">Contact</h1>
        <div className="contact-section">
            <div className="contact-blurb">
                <h3>ispum lipsum etc</h3>
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