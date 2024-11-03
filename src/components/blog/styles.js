import styled from 'styled-components';

export const BlogContainer = styled.div`
    max-width: 1147px;
    display: flex;
    align-items: center;
    gap: 32px;

    img {
        width: 490px;
        height: 318px;
    }
    h3 {
        font-size: 36px;
        font-weight: 700;
        color: #232536;
    }
    p {
        font-size: 16px;
        color: #6d6e76;
        margin-top: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
