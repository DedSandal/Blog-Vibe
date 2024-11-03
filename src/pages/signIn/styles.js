import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 24px;

    h3 {
        font-size: 46px;
        font-weight: 700;
        color: #232536;
    }
    a {
        color: #6d6e76;
        font-weight: 700;
        transition: 0.2s ease-in-out;

        &:hover {
            opacity: 0, 7;
        }
    }
    Button {
        background-color: #ffd050;
    }
`;
