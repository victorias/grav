import styled from "@emotion/styled";
import CodeSection from "../components/CodeSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfinitySection from "../components/InfinitySection";
import QuoteSection from "../components/QuoteSection";

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
      <QuoteSection />
      <CodeSection />
    </Stack>
  );
};

export default Index;
