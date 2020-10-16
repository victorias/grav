import styled from "@emotion/styled";
import Grid from "./Grid";
import { device } from "../lib/constants";
import Button, { ButtonStyles } from "./Button";

const Section = styled(Grid)`
  background-color: #fcfcfc;
  background: url("./triangle-background.png") no-repeat;
  padding-top: 24px;
  padding-bottom: 24px;

  @media ${device.tablet} {
    min-height: 440px;
    place-content: center;
    background: url("./iphone-in-hand.png") top -40px left -30px no-repeat,
      url("./triangle-background.png") no-repeat;
  }
`;

const Header = styled.h2`
  grid-column: 1 / -1;
  font-weight: 700;
  font-size: 24px;
  color: #787d84;
  letter-spacing: 0;
  margin-bottom: 11px;

  @media ${device.tablet} {
    font-size: 36px;
    margin-bottom: 16px;
    grid-column: 8/-2;
  }
`;

const Subtext = styled.p`
  grid-column: 1 / -1;
  font-size: 16px;
  color: #787d84;
  letter-spacing: 0;
  line-height: 28px;

  @media ${device.tablet} {
    font-size: 18px;
    grid-column: 8/-2;
  }
`;

const CTAContainer = styled.div`
  grid-column: 1 / -1;
  margin: 0px -24px;
  padding-top: 176px;
  background: url("./iphone-in-hand.png") top -40px left no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media ${device.tablet} {
    background: none;
    grid-column: 8/10;
    padding-top: 37px;
  }
`;

const LearnMoreButton = styled(Button)`
  margin: 0px 24px;
`;

const InfinitySection = () => (
  <Section>
    <Header>To Infinity & Beyond!</Header>
    <Subtext>
      Watch all your favorite movies anytime you want! Our premium plans has
      over 10,000 movies and shows to choose from.
    </Subtext>
    <CTAContainer>
      <LearnMoreButton buttonStyle={ButtonStyles.Secondary}>
        Learn More
      </LearnMoreButton>
    </CTAContainer>
  </Section>
);

export default InfinitySection;
