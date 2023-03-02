import { css } from "styled-components";

const spacing = [0, 1, 2, 3, 4, 5, 6, 7, 8, 12];

const getSpacing =
  (name: string, prefix: string) =>
  ({ theme } : any) => {
    const spacingCss = spacing.reduce(
      (accumulator, value) => `
    ${accumulator}
    .${prefix}-${value} {
      ${name}: ${theme.spacing(value)} !important;
    }
    .${prefix}t-${value} {
      ${name}-top: ${theme.spacing(value)} !important;
    }
    .${prefix}b-${value} {
      ${name}-bottom: ${theme.spacing(value)} !important;
    }
    .${prefix}r-${value} {
      ${name}-right: ${theme.spacing(value)} !important;
    }
    .${prefix}l-${value} {
      ${name}-left: ${theme.spacing(value)} !important;
    }
    .${prefix}x-${value} {
      ${name}-left: ${theme.spacing(value)} !important;
      ${name}-right: ${theme.spacing(value)} !important;
    }
    .${prefix}y-${value} {
      ${name}-top: ${theme.spacing(value)} !important;
      ${name}-bottom: ${theme.spacing(value)} !important;
    }
  `,
      ""
    );

    return `
    ${spacingCss}
    .${prefix}l-auto {
      ${name}-left: auto;
    }
    .${prefix}r-auto {
      ${name}-right: auto;
    }
  `;
  };

const text = css`
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }
  .text-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const flex = css`
  .justify-start {
    justify-content: flex-start;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-around {
    justify-content: space-around;
  }
  .align-start {
    align-items: flex-start;
  }
  .align-end {
    align-items: flex-end;
  }
  .align-center {
    align-items: center;
  }
`;

export { getSpacing, text, flex };