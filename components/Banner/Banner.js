import BannerStyles from './Banner.styled';

const Banner = ({ title, description }) => (
  <BannerStyles>
    <h1 className="title">{title}</h1>
    <p className="text">{description}</p>
  </BannerStyles>
);

export default Banner;
