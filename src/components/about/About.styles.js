import styled from 'styled-components';

export const AboutCenter = styled.div`
    display: grid;
    gap: 3rem 2rem;

    @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const AboutImg = styled.article`
    justify-self: center;

    @media screen and (min-width: 992px) {
        position: relative;
        &::before {
            content: "";
            left: -2rem;
            position: absolute;
            width: 100%;
            height: 100%;
            border: 0.25rem solid ${({ theme }) => theme.primary5};
            top: 2rem;
            right: -2rem;
            border-radius: var(--radius);
        }
    }
`;

export const AboutInfo = styled.article`
    @media screen and (min-width: 992px) {
        align-self: center;
    }
`;

export const AboutTitle = styled.div`
    text-align: left !important;
    margin-bottom: 2rem;

    .underline {
        margin-left: 0;
    }
`;
  