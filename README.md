# rainbow-square

Create a dataURL for a square with a rainbow gradient.

[![GitHub release](https://img.shields.io/github/release/bameyrick/rainbow-square.svg)](https://github.com/bameyrick/rainbow-square/releases)
[![Build Status](https://travis-ci.com/bameyrick/rainbow-square.svg?branch=main)](https://travis-ci.com/github/bameyrick/rainbow-square)
[![codecov](https://codecov.io/gh/bameyrick/rainbow-square/branch/main/graph/badge.svg)](https://codecov.io/gh/bameyrick/rainbow-square)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a3a3e32d932c4abd83b6f5f6d2efb990)](https://www.codacy.com/manual/bameyrick/rainbow-square)

![rainbow-square](https://i.imgur.com/FFvzqJ4.png)

- [rainbow-square](#rainbow-square)
  - [Install](#install)
    - [npm](#npm)
    - [yarn](#yarn)
  - [Documentation](#documentation)
  - [Usage](#usage)

## Install

You can install via npm or yarn.

### npm

```bash
npm install --save rainbow-square
```

### yarn

```bash
yarn add rainbow-square
```

## Documentation

This documentation is written in TypeScript, however this library works fine in vanilla JavaScript too.

## Usage

The async function will return a [dataURL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) which can be used in the `src` attribute of an `img` tag.

```typescript
import { rainbowSquare } from 'rainbow-square';

async function myFn(): Promise<void> {
  const image = document.createElement('img');

  img.src = await rainbowSquare(256);

  document.body.appendChild(img);
}

void myFn();
```

You can also provide a height if you want to generate an rainbow gradient that isn't a square, although this may end up with more of one colour depending on whether the generated image is wider/taller.
