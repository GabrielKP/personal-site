import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-09-13T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'nationalities',
    label: 'Nationalities',
    value: 3,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Berlin, Germany',
    link: 'https://www.berlin.de/en/',
  },
  {
    key: 'transport',
    label: 'Main mode of transport',
    value: 'Bike',
  },
  {
    key: 'push-ups',
    label: 'All-time record of push-ups',
    value: '42',
  },
  {
    label: 'Amount of ethnicity-declaration forms not allowing to tick hispanic AND black AND white',
    key: 'ethnicity_forms',
    value: 'Too many',
  },
  {
    label: 'Website last updated at',
    key: 'pushed_at',
    link: 'https://github.com/GabrielKP/gabrielkp.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];
// Add photo of my bike

export default data;
