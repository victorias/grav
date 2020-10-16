import styled from "@emotion/styled";
import CodeSection from "../components/CodeSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfinitySection from "../components/InfinitySection";
import QuoteSection from "../components/QuoteSection";
import SEO from "../components/SEO";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
type Props = {};

const Index = ({}: Props) => {
  return (
    <Stack>
      <SEO />
      <Header />
      <Hero />
      <InfinitySection />
      <QuoteSection />
      <CodeSection />
      <Footer />
    </Stack>
  );
};

export default Index;
