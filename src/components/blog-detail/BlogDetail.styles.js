import styled from 'styled-components';

export const BlogTemplate = styled.section`
    padding: 5rem 0;

    h1, h2 {
        text-align: center;
    }

    ul {
        margin-top: 2rem;
        display: inline-block;
    }
    ul li {
        background: ${({ theme }) => theme.grey9};
        color: ${({ theme }) => theme.grey5};
        padding: 0.5rem 1rem;
        margin: 1rem 0;
        text-transform: uppercase;
    }
    blockquote {
        background: ${({ theme }) => theme.primary9};
        border-radius: var(--radius);
        padding: 1rem;
        line-height: 2;
        color: ${({ theme }) => theme.primary5};
        margin: 2rem 0;
    }
    pre {
        background: #222;
        color: yellow;
        overflow-x: scroll;
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
    }
    img {
        width: 15rem;
        height: 15rem;
        margin: 3rem 0;
    }
`;