import styled from 'styled-components';

export const FooterContainer = styled.footer`

    padding-bottom: 2rem;
    background: #222;
    display: grid;
    place-items: center;

    p {
        font-size: 1.25rem;
    }
`;

export const FooterSocialIcons = styled.ul`
    margin-bottom: 2rem;
    display: grid;
    margin-top: 3rem;
    width: 20rem;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
`;

export const FooterSocialIcon = styled.a`
    color: var(--clr-primary-5);
    font-size: 1.5rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  
    &:hover {
        color: var(--clr-primary-5);
    }
`;
