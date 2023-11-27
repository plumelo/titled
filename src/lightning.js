const block = (declarations) => ({
  type: "style",
  value: {
    selectors: [[{ type: "nesting" }]],
    declarations: { declarations },
    rules: [],
    loc: { source_index: 0, line: 0, column: 0 },
  },
});

const textDeclarations = (prefix) => [
  {
    property: "font-size",
    raw: `var(--${prefix}-size)`,
  },
  {
    property: "line-height",
    raw: `var(--${prefix}-lh)`,
  },
];

export const text = (rule) => block(textDeclarations(rule.prelude.value));
export const heading = (rule) =>
  block([
    ...textDeclarations(rule.prelude.value),
    {
      property: "letter-spacing",
      raw: `var(--${rule.prelude.value}-ls)`,
    },
    {
      property: "font-weight",
      raw: '600',
    },
  ]);

export const customAtRules = {
  text: {
    prelude: "<custom-ident>",
  },
  heading: {
    prelude: "<custom-ident>",
  },
};

export const visitor = {
  Rule: { custom: { text, heading } },
};
