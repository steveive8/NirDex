import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing: border-box;
    }
    @font-face {
        font-family: 'Geometos';
        font-style: normal;
        font-weight: normal;
        src: local('Geometos'), url('./Geometos.ttf') format('ttf'),
        url('./Geometos.ttf')  format('truetype')
    }
    @font-face {
        font-family: 'telegrafico';
        font-style: normal;
        font-weight: normal;
        src: local('Telegrafico'), url('./telegrafico.ttf') format('ttf'),
        url('./Geometos.ttf')  format('truetype')
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'telegrafico';
        text-rendering:optimizeLegibility;
        background-color: rgb(10,18,30);
        color: white;
    }
    a {
        text-decoration: none;
        color: black;
    }
    input {
        border: 0;
    }
    input:focus {
        outline: none;
    }
    .chartbox {
        overflow: hidden;
    }
    .chartbox > div {
        width: 100%;
        background-color: rgba(0,0,0,0);
    }
    .chartbox select, .chartbox label {
        display: none;
    }
`;
