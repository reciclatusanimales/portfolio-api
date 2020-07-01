import styled from 'styled-components';

export const ContactSection = styled.section`
    display: grid;
    place-items: center;
    padding: 5rem 0;
`;

export const FormContainer = styled.article`
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
    
    &:hover {
        box-shadow: var(--dark-shadow);
    }
    h3 {
        padding-top: 1.25rem;
        color: ${({ theme }) => theme.grey5};
    }
`;

export const FormGroup = styled.div`
    padding: 1rem 1.5rem;
`;

export const Field = styled.div`
    label {
        flex: 0 0 150px;
        font-size: 1.8rem;
    }
    input,
    textarea {
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        border: none;
        margin-bottom: 1.25rem;
        background: ${({ theme }) => theme.grey10};
        border-radius: var(--radius);
        text-transform: uppercase;
        letter-spacing: var(--spacing);

        ::placeholder {
            font-family: var(--ff-primary);
            color: ${({ theme }) => theme.grey1};
            text-transform: uppercase;
            letter-spacing: var(--spacing);
        }
    }
    
    textarea {
        height: 200px;
    }
`;

export const Submit = styled.button`
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
`;