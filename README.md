# raiyan.dev

[![CI](https://github.com/trekhleb/trekhleb.github.io/workflows/CI/badge.svg)](https://github.com/trekhleb/trekhleb.github.io/actions?query=workflow%3ACI+branch%3Amaster)

My personal [website](https://raiyan-programmer.vercel.app/) with a list of my projects that help people learn and web-development, and Some of my testimonials.

![Raiyan.dev](https://res.cloudinary.com/dayleukzg/image/upload/v1654585163/Personal/Black_Minimal_Business_Personal_Profile_Linkedin_Banner_dkcx4c.png)

## Development

The website is built on [Next js](https://nextjs.org/). See the [Next js cheat-sheet](https://guydumais.digital/blog/next-js-the-ultimate-cheat-sheet-to-page-rendering/) for development hints.

### Running the project locally

To run the project locally in development mode on [http://localhost:3000](http://localhost:3000)

```bash
yarn dev
```

To run the Sanity CMS locally in development mode on [http://localhost:3333](http://localhost:3333)

```bash
sanity start
```

To deploy Sanity CMS locally in development mode on

```bash
sanity deploy
```

To build the production version of the project:

```bash
yarn build
```

To do ESLint and Type checking:

```bash
npm run lint
npm run type
```

### Working with icons

Use [react-icons.github.io](https://react-icons.github.io/react-icons) to search for available icons.

### Styling components

Use [SASS](https://sass-lang.com/) to search for how to use.

### Custom Domain Support

To serve the [raiyan.github.io](https://raiyan-github-io.vercel.app/) web-site on a custom domain [Raiyan.dev](https://raiyan-programmer.vercel.app/) make sure that the `main` branch has `vercel.json` file in the root folder inside `alias` key with your domain value. For more details read [this](https://vercel.com/docs/project-configuration).
