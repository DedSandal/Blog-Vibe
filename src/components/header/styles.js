import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: #232536;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 46px;
        color: #ffd050;
        font-weight: 700;
    }
    .logout-wrapper {
        display: flex;
        gap: 30px;
        position: absolute;
        right: 113px;

        Button {
            background-color: #ffd050;
        }
        .add-post {
            padding: 16px 48px;
            font-weight: 700;
            font-size: 18px;
            transition: 0.2s ease-in-out;
            background-color: #4c4c4c;
            color: white;

            &:hover {
                opacity: 0.7;
            }
        }
    }
    .button-link {
        position: absolute;
        right: 113px;
    }
`;
