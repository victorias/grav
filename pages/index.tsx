import styled from "@emotion/styled";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfinitySection from "../components/InfinitySection";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
type Props = {};

const Index = ({}: Props) => {
  return (
    <Stack>
      <Hero />
      <InfinitySection />
    </Stack>
  );
};

export default Index;
