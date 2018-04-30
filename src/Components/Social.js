import React, { Component } from 'react';
import mail from '../images/mail-icon.png';
import instagram from '../images/instagram-icon.png';
import linkedin from '../images/linkedin-icon.png';
import pinterest from '../images/pinterest-icon.png';
import twitter from '../images/twitter-icon.png';
import './Social.css';

class Social extends Component {
    render() {
        return(
            <div className="d-flex flex-column">
                <a href="https://twitter.com/AmbySharpe" target="_blank" rel="noopener noreferrer">
                    <img className="social-media-icon" src={twitter} alt="facebook" />
                </a>
                <a href="mailto:amberjsharpe@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img className="social-media-icon" src={mail} alt="e-mail" />
                </a>
                <a href="https://www.linkedin.com/in/amber-sharpe-05a4bb25/" target="_blank" rel="noopener noreferrer">
                    <img className="social-media-icon" src={linkedin} alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/ambysharpe/" target="_blank" rel="noopener noreferrer">
                    <img className="social-media-icon" src={instagram} alt="pinterest" />
                </a>
                <a href="https://www.pinterest.com/amberjsharpe/" target="_blank" rel="noopener noreferrer">
                    <img className="social-media-icon" src={pinterest} alt="twitter" />
                </a>
            </div>
        )
    }
}

export default Social
  