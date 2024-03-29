import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --fg: #202020;
    --bg: #FFFFFF;
    --bg-inline-code: #E9ECEF;
    --blockquote: #F8F9FA;
  }

  [data-theme="dark"] {
    --fg: #D9D9D9;
    --bg: #121212;
    --bg-inline-code: #363636;
    --blockquote: #1E1E1E;
  }

  /* CSS 초기화 */
  * {
    box-sizing: border-box;
    word-break: keep-all;
    -ms-overflow-style: none; /* IE and Edge */
  }
  html {
    width: 100%;

  }
  body {
    min-width: 360px;
    line-height: 1.25;
    background: var(--bg);
    color: var(--fg);

    & > div {
      position: relative;
      font-family: NanumSquareR;
    }
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, main {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* button, input, select, textarea 초기화 */
  button, input, select, textarea{
    padding:0;
    margin:0;
    border-radius:0;
    vertical-align:middle;
    font-size:1rem;
    background:transparent;
  }
  button,
  input[type="button"] {
    border:0 none;
  }
  button{
    cursor:pointer
  }
  button:focus {
    outline: none;
  }
  /* input 기본 스타일 초기화 */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input:focus {
    outline: none;
  }

  /* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
  input::-ms-clear { display: none; }

  /* input type number 에서 화살표 제거 */
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  textarea {
    resize: none;
    -webkit-appearance: none;
  }

  a {
    color: var(--fg);
    text-decoration: none;
    outline: none;

    &:hover, &:active {
      text-decoration: none;
    }
  }
  b {
    font-weight:700;
  }
`;
