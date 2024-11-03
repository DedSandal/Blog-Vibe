import styled from 'styled-components';

import BannerLogo from '../../assets/Banner.png';

export const BannerContainer = styled.div`
    background-image: url(${BannerLogo});
    background-size: cover;
    padding: 128px 556px 296px 80px;
    font-size: 18px;
    color: #ffffff;

    .banner-wrapper {
        max-width: 803px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    h2 {
        font-size: 56px;
        font-weight: 700;
        color: #ffffff;
    }
    .author-name {
        color: #ffd050;
    }
`;
