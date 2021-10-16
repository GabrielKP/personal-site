import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'mailto:gabriel.kressin@fu-berlin.de',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://github.com/GabrielKP',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/gabriel.kre/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/gabriel-kressin-palacios-00588413b/?locale=en_US',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/GabrielKressin',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://www.facebook.com/gabriel.kressin.7/',
    label: 'Facebook',
    icon: faFacebookF,
  },
];

export default data;
