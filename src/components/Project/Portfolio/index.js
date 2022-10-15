import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import homeBase from '../../../assets/photos/homebase.png';
import rapid from '../../../assets/photos/rapid.png';
import workday from '../../../assets/photos/workday.png';
import pg from '../../../assets/photos/PG.png';
import weather from '../../../assets/photos/weather.png';
import quiz from '../../../assets/photos/game.png';

function Portfolio () {

    return (
            <section className="wrapper">
                <h2>Portfolio</h2>
            <div id="main-work">
                <a href="https://enigmatic-bastion-69025.herokuapp.com/">
                    <img src={homeBase} alt="An application that allows you to create and/or join groups to keep track of your home needs."></img>
                </a>
                <div id="one-text">
                    <p>HomeBase</p>
                    <a href="https://github.com/AlexCourtney18/homebase"><FaGithubSquare /></a>
                </div>
            </div>
            <div id="second-work">
                <a href="https://howacy1.github.io/quad-coding/">
                    <img src={rapid} alt="An application that allows you to type an English word, define it and translate it into Spanish, French or Japanese."></img>
                </a>
                <div id="two-text">
                    <p>Rapid Translation</p>
                    <a href="https://github.com/howacy1/quad-coding"><FaGithubSquare /></a>
                </div>
            </div>
            <div id="third-work">
                <a href="https://oliviaramsfield.github.io/work-day-scheduler-jquery/">
                    <img src={workday} alt="A workday scheduler with two items displayed on the schedule."></img>
                </a>
                <div id="third-text">
                    <p>Work Day Scheduler</p>
                    <a href="https://github.com/OliviaRamsfield/work-day-scheduler-jquery"><FaGithubSquare /></a>
                </div>
            </div>
            <div id="fourth-work">
                <a href="https://oliviaramsfield.github.io/random-password-generator-javascript/">
                    <img src={pg} alt="Box with a button to randomly generate a password and a random password displayed."></img>
                </a>
                <div id="fourth-text">
                    <p>Password Generator</p>
                    <a href="https://github.com/OliviaRamsfield/random-password-generator-javascript"><FaGithubSquare /></a>
                </div>
            </div>
            <div id="fifth-work">
                <a href="https://oliviaramsfield.github.io/weather-dashboard-server-side-API/">
                    <img src={weather} alt="An application that allows you to type in a city and see the current weather with five day forecast."></img>
                </a>
                <div id="fifth-text">
                    <p>Weather Dashboard</p>
                    <a href="https://github.com/OliviaRamsfield/weather-dashboard-server-side-API"><FaGithubSquare /></a>
                </div>
            </div>
            <div id="sixth-work">
                <a href="https://oliviaramsfield.github.io/timed-quiz-javascript/">
                    <img src={quiz} alt="An application to test user knowledge about coding in a game format."></img>
                </a>
                <div id="fifth-text">
                    <p>Coding Quiz</p>
                    <a href="https://github.com/OliviaRamsfield/timed-quiz-javascript"><FaGithubSquare /></a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;