import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #050505;
    --meta: #888;
    --accent: rgb(0, 92, 221);
    --text: #FAFAFA;
    --base: 1.5rem;
    --code: 1rem;
    --heading-font-weight: 700;
  }

  @media (max-width: 600px) {
    :root {
      --base: 1.2rem;
    }
  }

  * {
    box-sizing: border-box;
  }

  body,
  html {
    font-size: var(--base);
    -webkit-font-smoothing: antialiased;

    overflow: auto;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    color: var(--text);
    background-color: var(--bg);
  }

  #slide {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 1rem 4rem;
  }

  #slide ul,
  #slide ol {
      text-align: left;
      margin-left: 32px;
  }

  blockquote {
    font-size: 120%;
    font-weight: bold;
    width: 50vw;
    text-align: left;
  }

  @media (max-width: 900px) {
    blockquote {
      width: 90vw;
    }
  }

  blockquote div::before {
    content: '\\201C';
  }

  blockquote div::after {
    content: '\\201D';
  }

  cite {
    font-size: 80%;
    font-weight: normal;
    font-style: normal;
    display: block;
    margin-top: 2rem;
  }

  cite::before {
    content: '\\2014\\00a0';
  }

   pre {
     font-size: 1.25rem !important;
     padding: 1rem 1.5rem 1rem .35rem !important;
  }


  em {
    color: gold;
  }
  a:hover {
    color: var(--accent);
  }

  h1 {
    /* font-family: var(--heading-font-family); */
    font-weight: var(--heading-font-weight);
    font-size: 200%;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  h2 {
    /* font-family: var(--heading-font-family); */
    font-weight: var(--heading-font-weight);
    font-size: 120%;
    margin-bottom: 2rem;
    text-align: center;
  }

  p,li {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  header {
    font-size: 50%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 20px;

    user-select: none;
  }

  header a,
  time {
    text-decoration: none;

    color: var(--meta);
  }

  header a:hover {
    color: var(--meta);
  }

  header span {
    color: var(--text);
  }
`;

export default GlobalStyle;
