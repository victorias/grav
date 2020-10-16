import styled from "@emotion/styled";
import Grid from "./Grid";
import { device } from "../lib/constants";
import Button from "./Button";
import CodeTabs from "./CodeTabs";

const Section = styled(Grid)`
  background: url("./code-background.png");
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.tablet} {
    min-height: 520px;
  }
`;

const Header = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 0;
  grid-column: 1/-1;
  margin-bottom: 11px;

  @media ${device.tablet} {
    font-size: 36px;
    grid-column: 1 / 5;
    margin-bottom: 16px;
  }
`;

const Subtext = styled.p`
  grid-column: 1/-1;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 24px;

  @media ${device.tablet} {
    grid-column: 1 / 5;
    font-size: 18px;
    line-height: 28px;
    grid-column: 1 / 5;
  }
`;

const ExploreButton = styled(Button)`
  align-self: flex-end;
  grid-column: 2/-2;

  @media ${device.tablet} {
    margin-bottom: 0px;
    grid-column: 1 / 4;
  }
`;

const Code = styled.div`
  grid-column: 1/-1;

  @media ${device.tablet} {
    grid-column: 7 / -1;
    grid-row: 1 / 5;
  }
`;

const CodeSection = () => (
  <Section>
    <Header>Ready to Build?</Header>
    <Subtext>
      Download our Developer SDK and begin creating experiencs of your own.
    </Subtext>
    <Subtext>
      Our platforms supports Development in JAVA, Go, Javascript, and Python.
    </Subtext>

    <ExploreButton>Explore the sdk</ExploreButton>
    <Code>
      <CodeTabs />
    </Code>
  </Section>
);

export default CodeSection;
