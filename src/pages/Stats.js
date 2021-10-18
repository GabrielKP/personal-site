import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Gabriel Kressin"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      <p>This website was just recently built based on
        <a href="https://mldangelo.com/">Michael D&apos;Angelo&apos;s website</a>.
        Please <a href="/contact">contact me</a> if you see any mistakes or issues!
      </p>
      <p> Source of the website available
        <a href="https://github.com/gabrielkp/gabrielkp.github.io"> here</a>.
      </p>
    </article>
  </Main>
);

export default Stats;
