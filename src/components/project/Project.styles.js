import styled from 'styled-components';
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

export const ProjectImg = styled.img`
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;
    opacity: 0.5;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, red, #222);
        opacity: 0.85;
        transition: var(--transition);
        z-index:10;
    }

    @media screen and (min-width: 576px) {
        height: 19rem;
    }
    @media screen and (min-width: 768px) {
        height: 22rem;
    }
    @media screen and (min-width: 992px) {
        grid-column: 1 / span 8;
        grid-row: 1 / 1;
        height: 30rem;
        border-radius: var(--radius);
        box-shadow: var(--dark-shadow);
    }
`;

export const ProjectInfo = styled.div`
    background: var(--clr-white);
    opacity: 0.95;
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);

    h3 {
        font-weight: 500;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }

    @media screen and (min-width: 992px) {
        border-radius: var(--radius);
        box-shadow: var(--dark-shadow);

        z-index: 1;
        grid-column: 5 /12;
        grid-row: 1 / 1;
    }
    color: blue;
`;

export const ProjectContainer = styled.section`
    display: grid;
    margin-bottom: 4rem;

    &:hover ${ProjectImg} {
        opacity: 0.9;
    }
    &:hover ${ProjectInfo} {
        color: red;
    }

    &:nth-of-type(even) ${ProjectImg} {
        grid-column: 5 / -1;
        grid-row: 1 / 1;
    }
    
    &:nth-of-type(even) ${ProjectInfo} {
        grid-column: 2 / span 7;
        grid-row: 1 / 1;
        text-align: left;
    }

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
    }
`;

export const ProjectNumber = styled.span`
    display: inline-block;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.primary5};
    margin-bottom: 0.75rem;
`;

export const ProjectDescription = styled.p`
    word-spacing: 15px;
    color: ${({ theme }) => theme.grey3};
`;

export const ProjectStack = styled.div`
    margin-bottom: 1rem;

    span {
        display: inline-block;
        background: ${({ theme }) => theme.grey9};
        color: ${({ theme }) => theme.grey5};
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
    }
`;

export const ProjectGithub = styled(FaGithubSquare)`
    color: ${({ theme }) => theme.primary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: var(--transition);

    &:hover {
        color: ${({ theme }) => theme.primary1};
    }
`;

export const ProjectSquare = styled(FaShareSquare)`
    color: ${({ theme }) => theme.primary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: var(--transition);

    &:hover {
        color: ${({ theme }) => theme.primary1};
    }
`;
