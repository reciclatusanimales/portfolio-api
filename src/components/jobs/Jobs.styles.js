import styled, { css } from 'styled-components';
import { FaAngleDoubleRight } from "react-icons/fa"

export const JobsCenter = styled.div`
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
    
    @media screen and (min-width: 992px) {
        width: 90vw;
        display: grid;
        grid-template-columns: 200px 1fr;
        column-gap: 4rem;
    }
`;

export const BtnContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;

    @media screen and (min-width: 992px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const JobInfo = styled.div`

    h3 {
        font-weight: 400;
    }
    h4 {
        text-transform: uppercase;
        color: ${({ theme }) => theme.grey5};
        background: ${({ theme }) => theme.grey9};
        display: inline-block;
        padding: 0.375rem 0.75rem;
        border-radius: var(--radius);
    }
    p {
        background: transparent;
        border-color: transparent;
        text-transform: capitalize;
        font-size: 1.25rem;
        letter-spacing: var(--spacing);
        margin: 0 0.5rem;
        transition: var(--transition);
        cursor: pointer;
        padding: 0.25rem 0;
        line-height: 1;
    }
    p:hover {
        color: ${({ theme }) => theme.primary5};
        box-shadow: 0 2px ${({ theme }) => theme.primary5};
    }
    
`;

export const JobDescription = styled.div`

    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
    
    p {
        margin-bottom: 0;
        color: ${({ theme }) => theme.grey3};
    }

`;

export const JobIcon = styled(FaAngleDoubleRight)`
    color: ${({ theme }) => theme.primary5};
`;

export const JobButton = styled.button`
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;

    &:hover {
        color: ${({ theme }) => theme.primary5};
        box-shadow: 0 2px ${({ theme }) => theme.primary5};
    }
    
    ${props => props.active && css`
        color: ${({ theme }) => theme.primary5};
        box-shadow: 0 2px ${({ theme }) => theme.primary5};
    `}

    

    @media screen and (min-width: 992px) {
        margin-bottom: 1rem;

        ${props => props.active && css`
            box-shadow: -2px 0 ${({ theme }) => theme.primary5};
        `}
        
        &:hover {
            box-shadow: -2px 0 ${({ theme }) => theme.primary5};
        }
    } 
`;