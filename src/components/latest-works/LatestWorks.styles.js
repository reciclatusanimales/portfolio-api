import styled from 'styled-components';

export const Text = styled.p`
    width: 85vw;
    max-width: 30rem;
    margin: 0 auto;
`;

export const LatestWorksCenter = styled.div`
    @media screen and (min-width: 676px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
    }
    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
   }
    @media screen and (min-width: 1170px) {
        grid-template-rows: 200px 200px;
        gap: 1rem;
        grid-template-areas:
        "a b b"
        "a c d";

        .work-1 {
            grid-area: a;
        }
        .work-2 {
            grid-area: b;
        }
        .work-3 {
            grid-area: c;
        }
        .work-4 {
            grid-area: d;
        }
    }
`;

export const WorkInfo = styled.div`
    
    text-align: center;
    color: var(--clr-white);
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    opacity: 0;
    
    p {
        text-transform: capitalize;
        color: var(--clr-white);
    }
`;

export const WorkImg = styled.img`
    
    -webkit-transition: var(--transition);
    transition: var(--transition);
    border-radius: var(--radius);
    height: 15rem;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (min-width: 1170px) {
        height: 100%;
    }
`;

export const Work = styled.article`
    
    position: relative;
    background: ${({ theme }) => theme.primary5};
    border-radius: var(--radius);
    margin-bottom: 2rem;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0.25rem solid var(--clr-white);
        border-radius: var(--radius);
        -webkit-transition: var(--transition);
        transition: var(--transition);
        opacity: 0;
    }
    &:hover:after {
        opacity: 1;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }

    &:hover ${WorkInfo} {
        opacity: 1;
    }

    &:hover ${WorkImg} {
        opacity: 0.1;
    }
    
    @media screen and (min-width: 1170px) {
        height: 100%;
    }
    
`;

