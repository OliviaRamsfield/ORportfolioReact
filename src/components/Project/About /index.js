import React from 'react';
import coverImage from '../../../assets/cover/me.jpeg';

function About () {

    return (
        <section className='my-5'>
            <h2 id="about">About Me</h2>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default About;