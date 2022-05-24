# PWA Studio Docs

This site hosts the documentation for Adobe's PWA Studio. If you would like to contribute to the documentation, use the following steps to set up your local development environment.

## Install Node 16 and Yarn 2

This site uses [Node 16.15.0 LTS](https://nodejs.org/en/) and [Yarn 2 package manager](https://yarnpkg.com/getting-started) to manage dependencies and run build scripts. If you do not have Node 16 or Yarn 2 installed, follow these steps:

1. Install Node 16.15.0 [using NVM](https://github.com/nvm-sh/nvm#readme) (recommended) or [using the installer](https://nodejs.org/en/). Yarn 2 requires node 16, so make sure you have it installed first.
2. Install Yarn 2 [using Corepack](https://yarnpkg.com/getting-started/install).

## Build the docs locally

1. Clone this site to your local machine: `git clone https://github.com/AdobeDocs/commerce-pwa-studio.git`.
2. Open a terminal in the root folder of the cloned site.
3. Enter `yarn` to install all the site's dependencies.
4. Enter `yarn dev` to build the site locally.

For a list of all commands you can run on your local instance of this site, open the `package.json` file and find the commands listed in the `scripts` section as shown here:

```
"scripts": {
    "start": "gatsby build && gatsby serve",
    "start:prefix": "gatsby build --prefix-paths && gatsby serve --prefix-paths",
    "dev": "gatsby develop",
    "dev:https": "gatsby develop --https --host localhost.corp.adobe.com --port 9000",
    "build": "gatsby build",
    "build:incremental": "GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true gatsby build --log-pages",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "lint": "npm run lint:md src/pages",
    "lint:md": "remark --quiet",
    "prettier": "prettier --write",
    "prettier:test": "prettier --check src"
  },
```

For example, to run the `clean` command (which removes the generated cache and files from a previous build), you would enter:

```
yarn clean
```

## Development resources

For the documentation developer, please read these sections on how to:
- [Arrange the structure content of your docs](https://github.com/adobe/aio-theme#content-structure)
- [Linking to pages](https://github.com/adobe/aio-theme#links)
- [Using assets](https://github.com/adobe/aio-theme-aio#assets)
- [Setting Global Navigation](https://github.com/adobe/aio-theme#global-navigation)
- [Setting Side Navigation](https://github.com/adobe/aio-theme#side-navigation)
- [Using content blocks](https://github.com/adobe/aio-theme#jsx-blocks)
- [Notes on using Markdown](https://github.com/adobe/aio-theme#writing-enhanced-markdown)

For more in-depth [instructions](https://github.com/adobe/aio-theme#getting-started).

## Ask Questions

To ask questions about PWA Studio development, join the `#pwa` community Slack channel here: https://magentocommeng.slack.com/archives/C71HNKYS2
