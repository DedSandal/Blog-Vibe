import styled from 'styled-components';

export const AddPostContainer = styled.div`
    margin: 140px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        font-weight: 700;
        font-size: 46px;
        color: #232536;
    }
    .form-wrapper {
        max-width: 1170px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 40px 0;
    }
    .inputs-wrapper {
        display: flex;
        gap: 30px;
    }
    .background-img {
        width: 536px;
        object-fit: cover;
        background-color: #f4f0f8;
        height: 402px;
    }
    img {
        width: 536px;
    }
    Button {
        background-color: #ffd050;
    }
`;
