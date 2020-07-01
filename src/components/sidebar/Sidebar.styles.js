import styled from 'styled-components';

export const Side = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.grey10};
    z-index: 4;
    display: grid;
    place-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    /* add later */
    -webkit-transform: translate(-100%);
    transform: translate(-100%);

    ${({ isOpen }) => isOpen && `
        -webkit-transform: translate(0);
        transform: translate(0);
        opacity: 1;
    `}

    @media screen and (min-width: 992px) {
        transform: translateX(-100%);
    }
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    background: transparent;
    border: none;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: #bb2525;
    cursor: pointer;

    &:hover {
        color: #e66b6b;
    }
`

export const SidebarLinks = styled.ul`
    text-align: center;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
        justify-self: end;

        a {
            text-transform: capitalize;
            color: ${({ theme }) => theme.grey1};
            font-weight: bold;
            letter-spacing: var(--spacing);
            -webkit-transition: var(--transition);
            transition: var(--transition);
        }

        a:hover {
            color: ${({ theme }) => theme.primary5};
        }
    }

    ${({ isOpen }) => isOpen && `
        text-align: center;

        li {
            opacity: 0;
        }

        a {
            font-size: 2rem;
            text-transform: capitalize;
            -webkit-transition: var(--transition);
            transition: var(--transition);
            color: ${({ theme }) => theme.grey5};
            letter-spacing: var(--spacing);
            display: inline-block;
            margin-bottom: 1.5rem;
        }

        a:hover {
            color: ${({ theme }) => theme.primary5};
        }
        
        li a {
            display: block;
            text-align: center;
            text-transform: capitalize;
            color: ${({ theme }) => theme.grey5};
            letter-spacing: var(--spacing);
            margin-bottom: 0.5rem;
            font-size: 2rem;
            transition: var(--transition);
            border-radius: var(--radius);
        }

        li a:hover {
            background: ${({ theme }) => theme.primary9};
            color: ${({ theme }) => theme.primary5};
        }
    `}

    li {
        animation: slideRight 0.5s ease-in-out 0.3s forwards;
    }
    li:nth-of-type(1) {
        animation-delay: 0.25s;
    }
    li:nth-of-type(2) {
        animation-delay: 0.5s;
    }
    li:nth-of-type(3) {
        animation-delay: 0.75s;
    }
    li:nth-of-type(4) {
        animation-delay: 1s;
    }
    li:nth-of-type(5) {
        animation-delay: 1.25s;
    }
    @keyframes slideRight {
        0% {
            transform: translateX(-200px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

export const SidebarSocialIcons = styled.ul`

    display: grid;
    margin-top: 3rem;
    width: 20rem;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    

    li {
        opacity: 0;
        animation: slideUp 0.5s ease-in-out 0.3s forwards;
    }
    li:nth-of-type(1) {
        animation-delay: 0.25s;
    }
    li:nth-of-type(2) {
        animation-delay: 0.5s;
    }
    li:nth-of-type(3) {
        animation-delay: 0.75s;
    }
    li:nth-of-type(4) {
        animation-delay: 1s;
    }
    li:nth-of-type(5) {
        animation-delay: 1.25s;
    }
    @keyframes slideUp {
        0% {
            transform: translateY(200px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media screen and (min-width: 992px) {
        transform: translateX(-100%);
    }
`;

export const SidebarSocialIcon = styled.a`

    font-size: 1.5rem;
    color: ${({ theme }) => theme.grey1};
    -webkit-transition: var(--transition);
    transition: var(--transition);

    &:hover {
        color: ${({ theme }) => theme.primary5};
    }
`;