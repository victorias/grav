import styled from "@emotion/styled";
import { device } from "../lib/constants";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: min-content;
  grid-column-gap: 20px;
  padding: 0px 20px;

  @media ${device.tablet} {
    padding: 0px 64px;
    min-height: 440px;
    place-content: center;
  }
`;
