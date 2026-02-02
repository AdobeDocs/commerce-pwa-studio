# Get started

Before you can start developing with PWA Studio, make sure you meet the requirements listed on this page.

## Minimum requirements

- A basic knowledge of [React][]
- Node >= 18
- Yarn (recommended) or NPM

## Check Node and Yarn versions

Verify your development environment has the minimum prerequisite versions of Node and Yarn installed:

- [NodeJS >=18 LTS](https://nodejs.org/en/)
- [Yarn >=1.12.0](https://yarnpkg.com)

Yarn v2 is currently not supported as its hoisting method is fundamentally different than v1.

Run the following commands in your terminal to identify which versions you have installed.

PWA Studio supports NodeJS Long Term Support (LTS) versions, currently v16 and v18, which are always [even-numbered](https://nodejs.org/en/about/previous-releases).

### Node

<CodeBlock slots="heading, code" repeat="2" languages="bash, bash" />

#### Command

```bash
node -v
```

#### Output

```bash
v18.16.0
```

### Yarn

<CodeBlock slots="heading, code" repeat="2" languages="bash, bash" />

#### Command

```bash
yarn -v
```

#### Output

```bash
1.12.10
```

If entering these commands does not show you a version number, install Node.js, Yarn, or both.

[react]: https://legacy.reactjs.org/
