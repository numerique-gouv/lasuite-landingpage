# La Suite

This repository houses the code and assets for _La Suite_ landing page.

_La Suite_ is currently under construction, and we anticipate ongoing updates and enhancements to our content. Stay tuned!

## Getting Started

This is a [Next.js](https://nextjs.org/) project.

First, install project dependencies:

```bash
yarn install
```

Copy the example env file:

```
cp .env.example .env
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To learn more about Next.js, take a look at the [Next.js Documentation](https://nextjs.org/docs).

## Authoring content

Most of the website content comes from yaml files authored through [DecapCMS](https://decapcms.org/). Go on `/admin`, login with your GitHub account, and edit existing pages or create new ones. On save, the CMS commits the content files in this repository, and the production website is deployed with the latest changes (deployment might take a few minutes).

You can also decide to directly edit yaml files in the `/content` directory, following the current structure.

### Locally

If you want to test the CMS locally, you can start a local CMS proxy server with `yarn cms`. This will make you edit your local files, without creating commits on changes.

For each content type, you can create a `__test__.yml` file that is ignored from Git. This can help you easily test the development of content types without risking commiting dev-related content files.

## Contributing

This project is intended to be community-driven, so please, do not hesitate to get in touch if you have any question related to our implementation or design decisions.

## License

This work is released under the MIT License (see [LICENSE](./LICENSE)).
