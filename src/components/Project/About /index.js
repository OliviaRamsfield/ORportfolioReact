import React from 'react';
import coverImage from '../../../assets/cover/me.jpeg';

function About () {

    return (
        <section className='my-5'>
            <h2 id="about">About Me</h2>
            <p>As a recent gradute of the UW Coding Bootcamp, I am looking for a position in web development that will help me practice and improve my skills. I am a confident communicator with a pension for problem solving and tackling new challenges.</p>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default About;