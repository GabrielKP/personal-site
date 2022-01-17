# Personal Website

See: [gabrielkp.github.io](gabrielkp.github.io).

Make sure to check out the Template: Michael D'Angelo's website[https://mldangelo.com/](https://mldangelo.com/) and the associated github repo [https://github.com/mldangelo/personal-site](https://github.com/mldangelo/personal-site). If you want to create your own website I suggest you base it of his Template.

My personal website. An [MIT](https://github.com/gabrielkp.github.io/blob/main/LICENSE) licensed, simple, easily modifiable, statically-exportable [React](https://reactjs.org/), [Jamstack](https://jamstack.org/) application that deploys automatically for free using [github pages](https://pages.github.com/). Built using modern javascript, based on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/), SCSS, [github actions](https://github.com/features/actions), and many other useful technologies.

## Adapting this Project

Building your own personal website from this project can take as little as 30 minutes. Follow the setup instructions below and review **detailed notes and a checklist on adapting this project [here](./docs/adapting-guide.md)**.

## Dependencies

Tested with: [node](https://nodejs.org/) =12,14. Use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/gabrielkp.github.io # replace [mldangelo] with your github username if you fork first.
cd personal-site
nvm install # this is optional - make sure you're running >= node 12 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
nvm use 14
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages

1. Modify the environmental variables and git remote url in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Modify `homepage` in `package.json` to point to where you plan to host your site. If you do not plan on using a custom domain name, it should look like `https://[your-gh-username].github.io/[repository-name - default:personal-site]/`
3. If you plan on using a custom domain, modify `public/CNAME`. If you don't, delete `public/CNAME`.

Make a commit to `main` and push your changes. That's it.

### Static Export

To statically export the site without deploying to github pages, delete or disable `.github/workflows/github-pages.yml` and run `npm run predeploy`. This generates a static export of the website as `personal-site/build/`. Copy this and self-host or deploy to a CDN.

## Acknowledgements

* The Website is based on [https://github.com/mldangelo/personal-site](https://github.com/mldangelo/personal-site) which in turn is based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net). Check out [Michael D'Angelo's Website](https://mldangelo.com/) to see the amazing original.
* Favicon was generated with [https://realfavicongenerator.net/](https://realfavicongenerator.net/)