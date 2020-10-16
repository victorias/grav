import styled from "@emotion/styled";
import Grid from "./Grid";
import { device } from "../lib/constants";

const Section = styled(Grid)`
  padding-top: 24px;
  padding-bottom: 24px;
  background-image: linear-gradient(
    257deg,
    #32c5ff 0%,
    #b620e0 51%,
    #f7b500 100%
  );
  grid-row-gap: 24px;
`;

const FooterContainer = Section.withComponent("footer");

const FooterImage = styled.div`
  background: url("./acme-logo.png") center center no-repeat;
  background-size: contain;
  grid-column: 1/-1;
  min-height: 269px;

  @media ${device.tablet} {
    grid-column: 1 / 4;
    grid-row: 1;
  }
`;

const LinksContainer = styled.section`
  grid-column: 1 / -1;
  line-height: 32px;
  color: #ffffff;

  h2 {
    font-weight: 700;
    font-size: 24px;
  }

  ul {
    font-size: 18px;
  }

  @media ${device.tablet} {
    grid-row: 1;
  }
`;

const ProductLinks = styled(LinksContainer)`
  @media ${device.tablet} {
    grid-column: 5 / span 2;
  }
`;

const SupportLinks = styled(LinksContainer)`
  @media ${device.tablet} {
    grid-column: 7 / span 2;
  }
`;

const CompanyLinks = styled(LinksContainer)`
  @media ${device.tablet} {
    grid-column: 9 / span 2;
  }
`;

const AttributionContainer = styled.div`
  grid-column: 1 / -1;
  font-size: 14px;
  color: #ffffff;
  font-weight: 700;
  font-family: Ubuntu;
  text-align: center;
  display: flex;
  flex-direction: column;

  small + small {
    margin-top: 12px;
  }
  @media ${device.tablet} {
    justify-content: space-between;
    flex-direction: row-reverse;
    small + small {
      margin-top: 0px;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <ProductLinks>
      <h2>Products</h2>
      <ul>
        <li>
          <a href="">Acme Phone +</a>
        </li>
        <li>
          <a href="">Acme Phone Duo</a>
        </li>
        <li>
          <a href="">Acme Tablet</a>
        </li>
        <li>
          <a href="">Acme Computer</a>
        </li>
        <li>
          <a href="">Acme Smart Desk</a>
        </li>
      </ul>
    </ProductLinks>

    <SupportLinks>
      <h2>Support</h2>
      <ul>
        <li>
          <a href="">Help Desk</a>
        </li>
        <li>
          <a href="">Talk to a Specialist</a>
        </li>
        <li>
          <a href="">Email Support</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
    </SupportLinks>

    <CompanyLinks>
      <h2>Company</h2>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
        <li>
          <a href="">Media kit</a>
        </li>
        <li>
          <a href="">Terms of service</a>
        </li>
        <li>
          <a href="">Privacy policy</a>
        </li>
      </ul>
    </CompanyLinks>

    <FooterImage />
    <AttributionContainer>
      <small>Hand Made by Victoria</small>
      <small>© 2020 ACME Co. All rights reserved.</small>
    </AttributionContainer>
  </FooterContainer>
);

export default Footer;
