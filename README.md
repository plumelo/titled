# @plumelo/titled

[![npm version](https://img.shields.io/npm/v/@plumelo/titled.svg)](https://www.npmjs.com/package/@plumelo/titled)
[![CI](https://github.com/plumelo/titled/actions/workflows/ci.yml/badge.svg)](https://github.com/plumelo/titled/actions/workflows/ci.yml)
[![License](https://img.shields.io/npm/l/@plumelo/titled.svg)](./LICENSE)

A simple collection of CSS utilities and mixins, built for use with [lightningcss](https://lightningcss.dev/).

## Install

```sh
npm install @plumelo/titled
```

## Usage

Import the full bundle:

```css
@import "@plumelo/titled";
```

Or import individual modules:

```css
@import "@plumelo/titled/button";
@import "@plumelo/titled/input";
@import "@plumelo/titled/row";
@import "@plumelo/titled/media";
```

## Exports

| Path | Description |
|---|---|
| `@plumelo/titled` | Full bundle (base, layout, typo, button) |
| `@plumelo/titled/base` | CSS reset + root variables |
| `@plumelo/titled/button` | Button styles (`.btn`, `.btn--lg`, `.btn--sm`, `.btn--sec`) |
| `@plumelo/titled/input` | Form input, label, checkbox styles |
| `@plumelo/titled/row` | Layout row utilities (`.row`, `.extbg`, `.bgRow`) |
| `@plumelo/titled/media` | Custom media query (`--mobile`) |
| `@plumelo/titled/lightning` | Lightningcss custom at-rules (`@text`, `@heading`) |

## Lightningcss custom at-rules

The `@plumelo/titled/lightning` export provides two custom at-rules for lightningcss:

### `@text`

Applies font-size and line-height from the typography scale:

```css
@text md;
/* -> font-size: var(--md-size); line-height: var(--md-lh); */
```

### `@heading`

Applies font-size, line-height, letter-spacing, and font-weight for headings:

```css
@heading xl;
/* -> font-size: var(--h-xl-size); line-height: var(--h-xl-lh);
      letter-spacing: var(--h-xl-ls); font-weight: 600; */
```

## Customization

All styles are driven by CSS custom properties. Override them in your own stylesheet to customize the theme:

### Typography

```css
:root {
  --xl-size: 20px;
  --xl-lh: 1.5;
  --lg-size: 18px;
  --lg-lh: 28px;
  --md-size: 16px;
  --md-lh: 1.5;
  --sm-size: 14px;
  --sm-lh: 20px;
}
```

### Headings

```css
:root {
  --h-xl-size: 60px;
  --h-xl-lh: 72px;
  --h-xl-ls: -0.02em;
  --h-lg-size: 48px;
  --h-lg-lh: 60px;
  --h-lg-ls: -0.02em;
  --h-md-size: 36px;
  --h-md-lh: 44px;
  --h-md-ls: -0.02em;
  --h-sm-size: 30px;
  --h-sm-lh: 38px;
  --h-xs-size: 24px;
  --h-xs-lh: 32px;
}
```

### Layout

```css
:root {
  --row-base: 1280px;
  --row-margin: 32px;
  /* --row-width is computed: min(100vw, --row-base) - 2 * --row-margin */
}
```

### Colors

The component styles reference color tokens (e.g. `--primary-600`, `--gray-700`, `--error-300`) that you define in your own design system. Override `--color` and `--link-color` in `:root` to change the base text and link colors:

```css
:root {
  --color: var(--gray-600);
  --link-color: var(--primary-700);
}
```

### Breakpoints

```css
/* Defined in @plumelo/titled/media */
@custom-media --mobile (width < 768px);
```

## Contributing

```sh
git clone https://github.com/plumelo/titled.git
cd titled
npm install
```

Commits follow [Conventional Commits](https://www.conventionalcommits.org/). Releases are automated via [semantic-release](https://github.com/semantic-release/semantic-release) with npm trusted publishing (OIDC).

## License

[WTFPL](./LICENSE)