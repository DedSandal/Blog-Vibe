import styled from 'styled-components';

export const BlogPageContainer = styled.div`
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;

    div {
        max-width: 850px;
    }
    h3 {
        font-size: 22px;
        font-weight: 700;
        text-align: center;
        color: #592ea9;
    }
    h4 {
        margin-top: 25px;
        font-size: 48px;
        font-weight: 700;
        color: #232536;
    }
    img {
        width: 1280px;
        height: 580px;
    }
    p {
        font-size: 18px;
        line-height: 28px;
        color: #6d6e76;
    }
`;
