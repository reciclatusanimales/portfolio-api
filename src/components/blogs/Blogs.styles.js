import styled from 'styled-components';

export const BlogsCenter = styled.header`
    @media screen and (min-width: 576px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
        column-gap: 2rem;
    }
`;