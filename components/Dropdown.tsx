import styled from "@emotion/styled";
import { device } from "../lib/constants";

const DropdownContainer = styled.dialog`
  border-style: none;
  background: none;
  padding: 0px;
  z-index: 100;
  left: -25px;

  max-width: 100vw;
  @media ${device.tablet} {
    left: -25%;
  }
`;

const ChildrenContainer = styled.div`
  background: #ffffff;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.5);
  border: 1px solid #979797;
  border-radius: 4px;
  margin-top: 20px;
  width: 422px;
  max-width: 100%;
  text-transform: none;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const DropdownTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  position: absolute;
  top: -5px;
  right: 80%;
  border-bottom: 5px solid #ffffff;
`;

const Dropdown = ({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: React.ReactNode;
}) =>
  isVisible && (
    <DropdownContainer open={isVisible}>
      <ChildrenContainer>
        <DropdownTriangle />
        {children}
      </ChildrenContainer>
    </DropdownContainer>
  );

export default Dropdown;
