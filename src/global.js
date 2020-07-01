// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: var(--ff-secondary);
        background: var(--clr-white);
        color: var(--clr-grey-1);
        line-height: 1.5;
        font-size: 0.875rem;
    }
    button:focus {
        outline:0 !important;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }

    img:not(.nav-logo) {
        width: 100%;
        display: block;
    }

    h1,
    h2,
    h3,
    h4 {
        letter-spacing: var(--spacing);
        text-transform: capitalize;
        line-height: 1.25;
        margin-bottom: 0.75rem;
        font-family: var(--ff-primary);
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.25rem;
    }
    h4 {
        font-size: 0.875rem;
    }
    p {
        margin-bottom: 1.25rem;
        color: var(--clr-grey-5);
    }
    @media screen and (min-width: 800px) {
        h1 {
            font-size: 4rem;
        }
        h2 {
            font-size: 2.5rem;
        }
        h3 {
            font-size: 1.75rem;
        }
        h4 {
            font-size: 1rem;
        }
        body {
            font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4 {
            line-height: 1;
        }
    }
    /*  global classes */

    .btn {
        text-transform: uppercase;
        background: var(--clr-primary-5);
        color: var(--clr-primary-1);
        padding: 0.375rem 0.75rem;
        letter-spacing: var(--spacing);
        display: inline-block;
        font-weight: 700;
        -webkit-transition: var(--transition);
        transition: var(--transition);
        font-size: 0.875rem;
        border: 2px solid transparent;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius);
    }
    .btn:hover {
        color: var(--clr-primary-1);
        background: var(--clr-primary-7);
    }
    .center-btn {
        display: block;
        width: 12rem;
        text-align: center;
        margin: 0 auto;
        margin-top: 3rem;
    }

    /* section */
    .section {
        padding: 5rem 0;
    }

    .section-center {
        width: 90vw;
        margin: 0 auto;
        max-width: 1170px;
    }
    @media screen and (min-width: 992px) {
        .section-center {
            width: 95vw;
        }
    }
    /* added during recording */
    .underline {
        width: 5rem;
        height: 0.25rem;
        margin-bottom: 1.25rem;
        background: var(--clr-primary-5);
        margin-left: auto;
        margin-right: auto;
    }

    /* section title */
    .section-title {
        margin-bottom: 4rem;
        text-align: center;
    }
    .bg-grey {
        background: var(--clr-grey-10);
    }

    /* fixed navbar */
    .navbar-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--clr-white);
        z-index: 2;
        box-shadow: var(--light-shadow);
    }

    .hero-photo {
        max-width: 25rem;
        max-height: 30rem;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: var(--radius);
        position: relative;
    }

    .blog-template,
    .projects-page,
    .blog-page,
    .error-page,
    .about-page,
    .contact-page {
        background: var(--clr-grey-10);
        min-height: calc(100vh - 5rem - 9rem);
    }
    .error-page {
        display: grid;
        place-items: center;
        background: var(--clr-primary-10);
        text-align: center;
    }
    .error-page h1 {
        text-transform: uppercase;
        color: var(--clr-primary-1);
        margin-bottom: 2rem;
    }
`