import { createGlobalStyle } from "styled-components";
import { getSpacing, text, flex } from "./mixing";

const globalStyle = createGlobalStyle`
  strong,
  b,
  .text-bold {
    font-weight: 500;
  }
  .d-flex {
    display: flex;
  }
  .d-block {
    display: block;
  }
  .flex-0 {
    flex: 0;
  }
  .flex-wrap-now {
    flex-wrap: wrap;
  }
  .m-center {
    margin: 0 auto;
  }
  .flex-1 {
    flex: 1;
  }
  .w-100 {
    width: 100%;
  }
  .w-75 {
    width: 75%;
  }
  .w-50 {
    width: 50%;
  }
  .h-100 {
    height: 100%;
  }
  .min-h-100 {
    min-height: 100%;
  }
  .scroll-y {
    overflow-y: auto;
  }
  .scroll-x-hidden {
    overflow-x: hidden;
  }
  .flex-column {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  .p-relative {
    position: relative;
  }
  .p-absolute {
    position: absolute;
  }
  ${getSpacing("margin", "m")}
  ${getSpacing("padding", "p")}
  ${text}
  ${flex}
`;

export default globalStyle;