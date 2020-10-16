import { css } from "@emotion/core";
import styled from "@emotion/styled";

export enum ButtonStyles {
  Primary,
  Secondary,
  Dark,
}

type Props = {
  buttonStyle?: ButtonStyles;
};

const Button = styled.button`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;

  background-image: linear-gradient(
    177deg,
    #32c5ff 0%,
    #7275f0 48%,
    #b620e0 100%
  );
  border: 1px solid #6236ff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24),
    inset 0 2px 0 0 rgba(255, 255, 255, 0.24);
  border-radius: 8px;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 48px;

  ${(props: Props) =>
    props.buttonStyle === ButtonStyles.Secondary &&
    css`
      background-image: linear-gradient(180deg, #ffffff 0%, #d8d8d8 100%);
      border: 1px solid #0091ff;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24),
        inset 0 2px 0 0 #ffffff;
      color: #0091ff;
      text-shadow: 0 1px 0 #ffffff;
    `}

  ${(props: Props) =>
    props.buttonStyle === ButtonStyles.Dark &&
    css`
      background-image: linear-gradient(180deg, #313539 0%, #000000 100%);
      border: 1px solid #000000;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24),
        inset 0 2px 0 0 rgba(255, 255, 255, 0.12);
      opacity: 0.87;
      color: #ffffff;
    `}
`;

export default Button;
