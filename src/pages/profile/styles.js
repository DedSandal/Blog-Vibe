import styled from 'styled-components';

export const ProfileContainer = styled.div`
    .list-wrapper {
        max-width: 1024px;
        margin: 128px auto;
        display: flex;
        flex-direction: column;
        gap: 64px;
    }
    h2 {
        font-size: 48px;
        font-weight: 700;
        color: #232536;
    }
`;

export const ProfileInfo = styled.div`
    background-color: #f4f0f8;
    width: 100%;
    padding: 128px 0;
    display: flex;
    justify-content: center;

    .author-widht {
        max-width: 1024px;
        display: flex;
        align-items: center;
        gap: 30px;
    }
    img {
        width: 250px;
        height: 300px;
    }
    h4 {
        font-size: 48px;
        font-weight: 700;
        color: #232536;
    }
    p {
        font-size: 16px;
        color: #6d6e76;
        margin-top: 40px;
    }
`;
