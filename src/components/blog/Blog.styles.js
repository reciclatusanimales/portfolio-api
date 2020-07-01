import styled from 'styled-components';
import { Link } from 'gatsby'

export const BlogContainer = styled(Link)`
    display: block;
    margin-bottom: 2rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);

    &:hover {
        box-shadow: var(--dark-shadow);
        transform: scale(1.02);
    }

    article {
        height: 100%;  
        display: grid;
        grid-template-rows: auto 1fr;
    }
`;

export const BlogImg = styled.img`
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 15rem;

    @media screen and (min-width: 576px) {
        height: 17.5rem;
    }
    @media screen and (min-width: 850px) {
        height: 13.75rem;
    }
`;

export const BlogCard = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 100%;
    padding: 1.5rem 1rem;

    h4 {
       color: var(--clr-grey-1);
    }
`;

export const BlogFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin-bottom: 0;
        font-weight: bold;
        color: var(--clr-grey-5);
    }
    p:first-of-type {
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
`;