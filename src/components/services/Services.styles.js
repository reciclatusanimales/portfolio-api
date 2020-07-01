import styled from 'styled-components';

export const ServicesCenter = styled.div`
    @media screen and (min-width: 676px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
    }
    @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Service = styled.div`
    background: var(--clr-white);
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);

    .service-icon {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
    .underline {
        width: 3rem;
        height: 0.12rem;
        -webkit-transition: var(--transition);
        transition: var(--transition);
    }
    p {
        -webkit-transition: var(--transition);
        transition: var(--transition);
    }
    &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
    }
    &:hover p {
        color: var(--clr-white);
    }
    &:hover .underline {
        background: var(--clr-white);
    }
`;