import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Pramey Kabra</h2>
        <p><a href="mailto:kabrap@pm.me">kabrap@pm.me</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Pramey. I like building things.
        I&apos;m a junior at <a href="https://cs.purdue.edu/">Purdue CS</a> majoring in Computer Science and Data Science with a minor in Economics. This past summer, I worked as a Software Engineering Intern at <a href="https://advisor360.com">Advisor360</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Pramey Kabra <Link to="/">kabrap.github.io/perosnal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
