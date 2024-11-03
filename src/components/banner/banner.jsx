import { BannerContainer } from './styles';

const Banner = () => {
    return (
        <BannerContainer>
            <div className="banner-wrapper">
                <p>
                    Posted on <b>startup</b>
                </p>
                <h2>Step-by-step guide to choosing great font pairs</h2>
                <div>
                    <span>
                        By <span className="author-name">James West </span>
                    </span>
                    |<span> May 23, 2022 </span>
                </div>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
            </div>
        </BannerContainer>
    );
};

export default Banner;
