# @plumelo/titled

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

## License

[WTFPL](./LICENSE)