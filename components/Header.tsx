import styled from "@emotion/styled";
import { Colors } from "../lib/constants";

const Flex = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 22px;
`;

const Logo = styled.div`
  font-size: 18px;
  color: ${Colors.Gray};
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  li {
    color: ${Colors.Gray};
    text-transform: uppercase;
  }

  li + li {
    margin-left: 49px;
  }
`;

type Props = {};
const Header = ({}: Props) => (
  <Flex>
    <Logo>ACME CO.</Logo>
    <Nav>
      <li>Overview</li>
      <li>Product</li>
      <li>Support</li>
      <li>Company</li>
    </Nav>
  </Flex>
);

export default Header;
