import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { useState } from "react";
import { device } from "../lib/constants";
import Dropdown from "./Dropdown";

const Flex = styled.header`
  display: flex;
  flex-direction: column;
  padding: 24px 24px;

  @media ${device.tablet} {
    padding: 0px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Container = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  display: flex;
`;

const Logo = styled.div`
  font-size: 18px;
  color: #6b8897;
  display: flex;
  flex: 1 0 auto;
  flex-direction: space-between;
`;

const NavContainer = styled.nav`
  display: flex;
  flex: 0 0 auto;

  ${(props: { isOpen: boolean }) =>
    !props.isOpen &&
    css`
      display: none;
    `}

  @media ${device.tablet} {
    display: flex;
  }
`;

const HamburgerButton = styled.button`
  background: url("./hamburger-icon.png") center center no-repeat;
  width: 32px;
  height: 28px;
  border-style: none;

  @media ${device.tablet} {
    display: none;
  }
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  width: 100%;

  @media ${device.tablet} {
    margin-top: 0px;
    flex-direction: row;
  }
`;

const NavLi = styled.li`
  color: #6b8897;
  text-transform: uppercase;
  padding: 12px 24px;
  position: relative;
  cursor: pointer;

  ${(props: { selected?: boolean }) =>
    props.selected &&
    css`
      border-bottom: #32c5ff;
      border-bottom-style: solid;
    `}

  @media ${device.tablet} {
    padding: 12px 24px;
  }
`;

const NavLink = ({
  onClick,
  children,
  selected,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  selected?: boolean;
}) => (
  <a onClick={() => onClick && onClick()}>
    <NavLi selected={selected}>{children}</NavLi>
  </a>
);

const ProductTitle = styled.h3`
  font-weight: 700;
  font-size: 14px;
  color: #7a44ff;
  letter-spacing: 0;
  line-height: 32px;
`;

const ProductDescription = styled.p`
  font-size: 11px;
  font-weight: 700;
  color: #6d7278;
  letter-spacing: 0;
  line-height: 18px;
`;

const ProductRow = styled.div`
  display: flex;
  height: 77px;
  padding: 12px 24px;

  ${(props: { isLast?: boolean }) =>
    props.isLast &&
    css`
      border-top: #d8d8d8;
      border-top-style: solid;
    `}
`;

const ProductText = styled.div``;
const ProductImage = styled.div`
  flex: 0 0 77px;
  width: 77px;
  background: url(${(props: { imgUrl: string }) => props.imgUrl}) center center
    no-repeat;
  background-size: contain;
`;

const ProductNavLink = () => {
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);

  return (
    <NavLink
      onClick={() => {
        setDropdownIsVisible((isVisible) => !isVisible);
      }}
    >
      Product
      <Dropdown isVisible={dropdownIsVisible}>
        <ProductRow>
          <ProductImage imgUrl="./products1.png" />
          <ProductText>
            <ProductTitle>INFINXITY X</ProductTitle>
            <ProductDescription>
              Beard tumblr williamsburg forage shabby chic tote bag,
              chicharrones stumptown godard mustache hella street art.
            </ProductDescription>
          </ProductText>
        </ProductRow>
        <ProductRow isLast>
          <ProductImage imgUrl="./products2.png" />
          <ProductText>
            <ProductTitle>SAPPHIRE 65</ProductTitle>
            <ProductDescription>
              Beard tumblr williamsburg forage shabby chic tote bag,
              chicharrones stumptown godard mustache hella street art.
            </ProductDescription>
          </ProductText>
        </ProductRow>
      </Dropdown>
    </NavLink>
  );
};

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Flex>
      <Container>
        <Logo>ACME CO.</Logo>
        <HamburgerButton
          onClick={() => {
            setMenuIsOpen((isOpen) => !isOpen);
          }}
        />
      </Container>
      <NavContainer isOpen={menuIsOpen}>
        <Nav>
          <NavLink selected>Overview</NavLink>
          <ProductNavLink />
          <NavLink>Support</NavLink>
          <NavLink>Company</NavLink>
        </Nav>
      </NavContainer>
    </Flex>
  );
};

export default Header;
