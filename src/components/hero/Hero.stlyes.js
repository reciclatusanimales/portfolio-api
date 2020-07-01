import styled from 'styled-components';

export const Header = styled.header`
    background: ${({ theme }) => theme.primary10};
`;

export const HeroCenter = styled.div`
    min-height: calc(100vh - 5rem);
    display: grid;
    place-items: center;

    @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const HeroInfo = styled.article`
    h4 {
     color: ${({ theme }) => theme.grey5};
    }
`;

export const HeroTitle = styled.div`
    text-align: left !important;
    margin-bottom: 2rem;

    .underline {
        margin-left: 0;
    }
`;

export const HeroImg = styled.article`
    display: none;

    @media screen and (min-width: 992px) {
        display: block;
        position: relative;

        &::before {
            content: "";
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

// .hero .underline {
//     margin-bottom: 0.5rem;
//     margin-left: 0;
//   }

//   .hero-icons {
//     justify-items: start;
//   }
//   .hero-btn {
//     margin-top: 1.25rem;
//   }
//   @media screen and (min-width: 992px) {


//   .hero-photo {
//     max-width: 25rem;
//     max-height: 30rem;
//     -o-object-fit: cover;
//     object-fit: cover;
//     border-radius: var(--radius);
//     position: relative;
//   }