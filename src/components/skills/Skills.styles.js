import styled from 'styled-components';

export const SkillsContainer = styled.section`
    background: var(--clr-primary-9);
    
    h3 {
        margin: 1.5rem 0;
        color: var(--clr-primary-1);
    }
`;

export const SkillsCenter = styled.div`
    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 2rem;
    }
`;

export const SkillText = styled.div`
    visibility: hidden;
    position: absolute;
    top: -2rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);    
    left: ${props => `${props.value}%`};
`;

export const Skill = styled.div`
    margin-bottom: 1.25rem;
    
    p {
        margin-bottom: 0.5rem;
        text-transform: capitalize;
        color: var(--clr-primary-1);
    }    
`;


export const SkillValue = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    width: ${props => `${props.value}%`};
`;


export const SkillContainer = styled.div`
    height: 1rem;
    width: 100%;
    background: var(--clr-white);
    border-radius: var(--radius);
    position: relative;

    &:hover > ${SkillText} {
        visibility: visible;
    }
    &:hover > ${SkillValue} {
        background: var(--clr-primary-5);
    }
`;
