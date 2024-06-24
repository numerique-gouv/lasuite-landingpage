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

Most of the website content comes from yaml files authored through [DecapCMS](https://decapcms.org/). Go on `/admin`, login with your GitHub account, and edit existing pages or create new ones. On save, the CMS commits the content files in this repository, and the production website is deployed with the latest changes. Deployment might take a few minutes, so you can enable the preview panel in the CMS to be sure the page will be rendered as you like instead of waiting. _ℹ Note: preview components have trouble loading JS-related features. That is why some interactive UI components are not rendered exactly the same as on the website (for example, the slider components or the accordions)._

You can also decide to directly edit yaml files in the `/content` directory, following the current structure.

### Special fields

On build, for every field named `image`, we'll try to get the image dimensions before rendering the content in nextjs pages (adding an `image_object` object next to the `image` data, with src, width and height info)

## Translating the website

There are both translation strings in the code, and translated content to manage.

- to update code translation strings, edit yaml locale files in `/src/locales/`. They can be easily updated through the GitHub UI if you don't want to install the project locally. Check the `fr.yml` file for a given translation: some of them have template tags (with curly braces) needed to render properly you should not be forgotten,
- to update translated content, use the CMS as usual and edit the content of the language you want. Yaml content files in `/content` will be updated accordingly.

For each content page, you can decide if the page is available in english and german or not. This is useful if you can't translate some content directly. Don't forget to toggle the switches _on_ when your translated page is ready.

### Locally

If you want to test the CMS locally, after starting the dev server with `yarn dev`, you can start a local CMS proxy server with `yarn cms`. This will make you edit your local files, without creating commits on changes.

For each content type, you can create a `__test__.yml` file that is ignored from Git. This can help you easily test the development of content types without risking commiting dev-related content files. An example service landing page yml file can be copied to help (`/content/.examples/service-page.yml`).

## Contributing

This project is intended to be community-driven, so please, do not hesitate to get in touch if you have any question related to our implementation or design decisions.

## License

This work is released under the MIT License (see [LICENSE](./LICENSE)).
