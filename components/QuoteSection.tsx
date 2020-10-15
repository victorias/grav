import styled from "@emotion/styled";
import { Grid } from "./Grid";
import { device } from "../lib/constants";
import { useState } from "react";
import { css } from "@emotion/core";

const quotes = [
  {
    quote:
      "Pop-up banjo lumbersexual gentrify vinyl tofu. Taiyaki adaptogen organic drinking vinegar hella. Four dollar toast salvia cold-pressed, tilde fixie vape copper mug umami disrupt glossier iceland man bun pour-over pabst. Vaporware banjo crucifix, kombucha shaman schlitz tousled microdosing vinyl put a bird on it lomo vegan pinterest.",
    name: "Jane Doe",
    avatarUrl: "./person-1.png",
  },
  {
    quote:
      "Pop-up banjo lumbersexual gentrify vinyl tofu. Taiyaki adaptogen organic drinking vinegar hella. Four dollar toast salvia cold-pressed, tilde fixie vape copper mug umami disrupt glossier iceland man bun pour-over pabst. Vaporware banjo crucifix, kombucha shaman schlitz tousled microdosing vinyl put a bird on it lomo vegan pinterest.",
    name: "Janet Jackson",
    avatarUrl: "./person-2.png",
  },
  {
    quote:
      "Pop-up banjo lumbersexual gentrify vinyl tofu. Taiyaki adaptogen organic drinking vinegar hella. Four dollar toast salvia cold-pressed, tilde fixie vape copper mug umami disrupt glossier iceland man bun pour-over pabst. Vaporware banjo crucifix, kombucha shaman schlitz tousled microdosing vinyl put a bird on it lomo vegan pinterest.",
    name: "Arthur Xenon",
    avatarUrl: "./person-3.png",
  },
];

const Section = styled(Grid)`
  background-image: linear-gradient(
    180deg,
    rgba(50, 197, 255, 0.12) 0%,
    #ffffff 100%
  );
`;

const Quote = styled.blockquote`
  grid-column: 1 / -1;
  font-size: 16px;
  color: #787d84;
  letter-spacing: 0;
  text-align: center;
  line-height: 24px;
  position: relative;
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    grid-column: 3 / -3;
    font-size: 21px;
    line-height: 32px;
    margin-bottom: 22px;
  }
`;

const QuoteMark = styled.div`
  position: absolute;
  font-size: 140px;
  color: rgba(0, 0, 0, 0.1);
  letter-spacing: 0;
  text-align: center;
  top: 0.3ch;

  @media ${device.tablet} {
    font-size: 200px;
  }
`;

const QuoteMarkLeft = styled(QuoteMark)`
  left: -10px;
  top: -10px;
  @media ${device.tablet} {
    left: -1ch;
    top: 0px;
  }
`;

const QuoteMarkRight = styled(QuoteMark)`
  right: -10px;
  top: -10px;
  @media ${device.tablet} {
    right: -1ch;
    top: 0px;
  }
`;

const Author = styled.footer`
  font-weight: 700;
  font-size: 14px;
  color: #6d7278;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 21px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;

  img + img {
    margin-left: 16px;
  }
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;

  ${(props: { selected: boolean }) =>
    !props.selected &&
    css`
      opacity: 0.24;
    `}
`;

const QuoteSection = () => {
  const [selectedQuote, setSelectedQuote] = useState(quotes[0]);
  return (
    <Section>
      <Quote>
        <QuoteMarkLeft>“</QuoteMarkLeft>
        <QuoteMarkRight>”</QuoteMarkRight>
        {selectedQuote.quote}
        <Author>- {selectedQuote.name}</Author>
        <AvatarContainer>
          {quotes.map(({ avatarUrl }) => (
            <Avatar
              selected={avatarUrl === selectedQuote.avatarUrl}
              src={avatarUrl}
            />
          ))}
        </AvatarContainer>
      </Quote>
    </Section>
  );
};

export default QuoteSection;
