// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    
    :root {
        --clr-white: #fff;
        --ff-primary: "Roboto", sans-serif;
        --ff-secondary: "Open Sans", sans-serif;
        --transition: all 0.5s linear;
        --spacing: 0.2rem;
        --radius: 0.5rem;
        --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        --max-width: 1170px;
    }

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
        color: ${({ theme }) => theme.grey1};
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
        color: ${({ theme }) => theme.grey5};
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
        background: ${({ theme }) => theme.primary5};
        color: ${({ theme }) => theme.primary1};
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
        color: ${({ theme }) => theme.primary1};
        background: ${({ theme }) => theme.primary7};
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
        background: ${({ theme }) => theme.primary5};
        margin-left: auto;
        margin-right: auto;
    }

    /* section title */
    .section-title {
        margin-bottom: 4rem;
        text-align: center;
    }
    .bg-grey {
        background: ${({ theme }) => theme.grey10};
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
        background: ${({ theme }) => theme.grey10};
        min-height: calc(100vh - 5rem - 9rem);
    }
    .error-page {
        display: grid;
        place-items: center;
        background: ${({ theme }) => theme.primary10};
        text-align: center;
    }
    .error-page h1 {
        text-transform: uppercase;
        color: ${({ theme }) => theme.primary1};
        margin-bottom: 2rem;
    }
    @media screen and (min-width: 676px) {
        .services-center {
            display: grid;
            grid-template-columns: 1fr 1fr;
            -webkit-column-gap: 2rem;
            -moz-column-gap: 2rem;
            column-gap: 2rem;
        }
    }
    @media screen and (min-width: 992px) {
        .services-center {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    .project {
  display: grid;
  margin-bottom: 4rem;
}
.project-img {
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 19rem;
  z-index: 1;
}
.project-img::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
  opacity: 0.85;
  transition: var(--transition);
}
.project:hover .project-img::after {
  opacity: 0;
}
.project-info {
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.project-number {
  display: inline-block;
  font-size: 1.25rem;
  color: var(--clr-primary-5);
  margin-bottom: 0.75rem;
}
.project-info h3 {
  font-weight: 500;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}
.project-desc {
  word-spacing: 15px;
  color: var(--clr-grey-3);
}
.project-stack {
  margin-bottom: 1rem;
}
.project-stack span,
.about-stack span {
  display: inline-block;
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
}
.about-stack span {
  margin-top: 0.5rem;
}
.project-icon {
  color: var(--clr-primary-5);
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: var(--transition);
}
.project-icon:hover {
  color: var(--clr-primary-1);
}
@media screen and (min-width: 576px) {
  .project-img {
    height: 19rem;
  }
}
@media screen and (min-width: 768px) {
  .project-img {
    height: 22rem;
  }
}
@media screen and (min-width: 992px) {
  .project {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
  .project-img {
    grid-column: 1 / span 8;
    /* grid-column-end: 8; */
    grid-row: 1 / 1;
    height: 30rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
  }
  .project-info {
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);

    z-index: 1;
    grid-column: 5 /12;
    grid-row: 1 / 1;
  }
  .project:nth-of-type(even) .project-img {
    grid-column: 5 / -1;
    grid-row: 1 / 1;
  }
  .project:nth-of-type(even) .project-info {
    grid-column: 2 / span 7;
    grid-row: 1 / 1;
    text-align: left;
  }
}
`