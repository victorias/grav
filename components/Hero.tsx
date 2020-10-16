import styled from "@emotion/styled";
import { device } from "../lib/constants";
import Button from "./Button";
import Grid from "./Grid";

const Section = styled(Grid)`
  background: linear-gradient(225deg, #32c5ff 0%, #b620e0 51%, #f7b500 100%)
    center no-repeat;

  @media ${device.tablet} {
    background: url("./iphone-front.png") bottom -100px right 300px no-repeat,
      url("./iphone-back.png") bottom -100px right 24px no-repeat,
      linear-gradient(225deg, #32c5ff 0%, #b620e0 51%, #f7b500 100%) center
        no-repeat;
    place-content: center;
    min-height: 440px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  grid-column: 2/-2;
  font-weight: 700;
  font-size: 36px;
  color: #ffffff;
  letter-spacing: 0;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 32px;

  @media ${device.tablet} {
    grid-column: 1 / 5;
    text-align: left;
    margin-top: 0px;
  }
`;

const Subtext = styled.h2`
  grid-column: 1/-1;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 24px;

  @media ${device.tablet} {
    grid-column: 1 / 5;
    text-align: left;
    margin-bottom: 56px;
  }
`;

const ExploreProductsButton = styled(Button)`
  grid-column: 2/-2;
  margin-bottom: 24px;
  @media ${device.tablet} {
    margin-bottom: 0px;
    grid-column: 1 / 4;
  }
`;

const HeroImageBack = styled.div`
  height: 139px;
  grid-column: 1/6;
  grid-row: 4;
  background: url("./iphone-back.png") no-repeat;
  background-size: cover;

  @media ${device.tablet} {
    display: none;
  }
`;

const HeroImageFront = styled.div`
  grid-column: 7/-1;
  grid-row: 4;
  height: 139px;
  background: url("./iphone-front.png") no-repeat;
  background-size: cover;

  @media ${device.tablet} {
    display: none;
  }
`;

const Hero = () => (
  <Section>
    <Heading>Spring is here</Heading>
    <Subtext>
      We’ve updated out lineup of products for spring. Checkout the lastest
      discounts and specials available until 4/20/20.
    </Subtext>
    <ExploreProductsButton>Explore Products</ExploreProductsButton>

    <HeroImageFront />
    <HeroImageBack />
  </Section>
);

export default Hero;
