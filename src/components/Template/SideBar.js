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
        <h2>Gabriel Kressin</h2>
        <p><a href="mailto:gabriel.kressin@fu-berlin.de">gabriel.kressin@fu-berlin.de</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I am a Computer Science student with a deep passion for Cognitive Science.
        I love thinking about the mind, brain and machines. I am determined to
        contribute to Artificial Intelligence research.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Gabriel Kressin Palacios <Link to="/">gabrielkp.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
