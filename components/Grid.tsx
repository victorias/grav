import styled from "@emotion/styled";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: min-content;
  grid-column-gap: 20px;
  padding: 0px 64px;
`;
