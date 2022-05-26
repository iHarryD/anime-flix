import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* BASICS */
    *,
    *::after,
    *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    body {
    background: var(--PRIMARY-BACKGROUND-CLR);
    background-position: center;
    background-size: contain;
    }

    button,
    input,
    a,
    ul {
    background: transparent;
    border: none;
    color: inherit;
    font-size: inherit;
    list-style: none;
    outline: none;
    text-decoration: none;
    }

    main {
    min-height: 100vh;
    padding: 1em;
    }

    img {
    max-width: 100%;
    }

  /* TYPOGRAPHY */

    body {
        color: var(--PRIMARY-FONT-CLR);
        font-family: "Poppins", sans-serif;
        font-weight: 400;
      }

  /* VARIABLES */

    :root {
      --ACCENT-CLR: #166565;
      --ACCENT-FONT-CLR: var(--LIGHT-FONT-CLR);
      --DARK-FONT-CLR: #2d2d2d;
      --HOVER-OVERLAY-CLR: #0a0a0a3b;
      --ICON-BTN-BACKGROUND-CLR: #000000bd;
      --LIGHT-FONT-CLR: #fff;
      --INPUT-BORDER-CLR: #1f1e1a;
      --PRIMARY-BACKGROUND-CLR: #2d2d2d;
      --PRIMARY-BTN-BACKGROUND-CLR: var(--ACCENT-CLR);
      --PRIMARY-BTN-FONT-CLR: var(--ACCENT-FONT-CLR);
      --PRIMARY-FONT-CLR: var(--LIGHT-FONT-CLR);
      --SECONDARY-ACCENT-CLR: #1e1e1e;
      --SECONDARY-BTN-BACKGROUND-CLR: #0000;
      --SECONDARY-BTN-HOVER-CLR: #0000;
    }


    :root {
      --BORDER-RADIUS: 10px 0;
      --BTN-BORDER-WIDTH: 2px;
      --BTN-BORDER-RADIUS: 0px;
      --INPUT-BORDER-RADIUS: 0px;
      --INPUT-BORDER-WIDTH: 0px;
    }


    :root {
      --BTN-PADDING-Y: 0.6em;
      --BTN-PADDING-X: 1.3em;
      --HAS-GAP-VALUE: 1em;
      --SECTION-PADDING-X: 1rem;
      --ICON-BTN-PADDING: 0.6em;
      --INPUT-PADDING-Y: var(--BTN-PADDING-Y);
      --INPUT-PADDING-X: var(--BTN-PADDING-X);
    }


    :root {
      --TRANSITION-DURATION: 150ms;
    }

  /* ANIMATIONS */

    @keyframes skeletonAnimation {
        0% {
          opacity: 1;
        }
    
        50% {
          opacity: 0.5;
        }
    
        100% {
          opacity: 1;
        }
      }
    `;
