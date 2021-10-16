import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h3 className="school"><a href={data.link}>{data.school}</a></h3>
      <p className="description">{data.subject}, {data.year}, {data.location} </p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Degree;
