import styled from 'styled-components';

export const Text = styled.p`
    width: 85vw;
    max-width: 30rem;
    margin: 0 auto;
`;

export const LatestWorksCenter = styled.div`
    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
   }
    @media screen and (min-width: 1170px) {
        grid-template-rows: 200px 200px;
        gap: 1rem;
        grid-template-areas:
        "a b b"
        "a c d";
    }
`;

export const Work = styled.article`
    
    position: relative;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    margin-bottom: 2rem;
    
    @media screen and (min-width: 1170px) {
        height: 100%;
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