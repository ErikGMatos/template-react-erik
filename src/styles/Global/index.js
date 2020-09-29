import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');

*{box-sizing: border-box;margin: 0;padding: 0;}

::-webkit-input-placeholder, ::-moz-placeholder, ::-ms-input-placeholder{color: inherit;}

::-moz-placeholder{opacity: 1;}

:-webkit-autofill, :-webkit-autofill:focus {box-shadow: 0 0 0 50px white inset;}

html{font-size: 10px;}

body{overflow-x: hidden;min-width: 1024px;min-height: 100vh;background-color: #ecedf2;color: #8b8c99;font-family: 'Poppins', sans-serif;-webkit-font-smoothing: antialiased !important;}

h1, h2, h3, h4, h5, h6, th{font-weight: inherit;font-size: inherit;}

cite, var, address, dfn{font-style: inherit;}

body, pre, form, input, textarea, keygen, select, button, h1, h2, h3, h4, h5, h6, p, hr, blockquote, ol, ul, dl, dd, figure, fieldset{margin: 0;}

ol, fieldset, legend, input, button, textarea{padding: 0;font-family: inherit;}

ul{padding-left: 0;}

ol, ul, li{list-style-type: none;}

a{color: inherit;text-decoration: none;cursor: pointer;}

textarea{overflow-y: auto;resize: none;}

iframe{border-style: none;}

fieldset, hr, button, keygen, img{border-style: none;outline-style: none;font-size: inherit;font-family: inherit;}

[type=button], [type=reset], [type=submit], [type=file], [type=image], button{cursor: pointer;appearance: none;}

[disabled]{cursor: not-allowed;}

.ps__rail-y {opacity: 0.6;}

.ps__thumb-y {cursor: pointer;}

.is-dragging {opacity: 0.5;}

.ps .ps__rail-y, .ps .ps__rail-y.ps--clicking {
  width: 10px;
  background-color: #eee !important;
}

.ps__rail-y:hover > .ps__thumb-y, .ps__rail-y:focus > .ps__thumb-y, .ps__rail-y.ps--clicking .ps__thumb-y {
  width: 6px;
}
`;
