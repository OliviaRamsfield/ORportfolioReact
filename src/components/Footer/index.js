import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


function Footer () {

    return (
        <footer>
            <a className="mx-2" href="https://github.com/OliviaRamsfield"><FaGithubSquare /></a>
            <a className="mx-2" href="https://github.com/OliviaRamsfield"><FaGitlab /></a>
            <a className="mx-2" href="https://github.com/OliviaRamsfield"><FaLinkedin /></a>
        </footer>
    )
}

export default Footer;