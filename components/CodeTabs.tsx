import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { link } from "fs";
import { useState } from "react";
import CodePreview from "./CodePreview";

const codeSamples = [
  {
    language: "Javascript",
    sample: `class NewGame {
      constructor(settings = {id: '', pinned: false}) {
        const {id} = settings;
        const elementId = id || ‘#game’;
        const hasSeenMessage = Cookies.get('ga');
    
        // CHECK IF USER HAS SEEN MESSAGE
        if(!hasSeenMessage) {
          this.$GDPR = $(elementId);
          this.$close = this.$GDPR.find('#close-gdpr');
    
          // activate
          this.activate();
        }
      }
    `,
  },
  {
    language: "go",
    sample: `package main

    import "fmt"
    
    func main() {
        ch := make(chan float64)
        ch <- 1.0e10    // magic number
        x, ok := <- ch
        defer fmt.Println(\`exitting now\`)
        go println(len("hello world!"))
        return
    }
    
  `,
  },
];

const TabContainer = styled.article`
  background: #000000;
  border: 1px solid #000000;
  border-radius: 8px;
  overflow: hidden;
`;

const TabNavigation = styled.ul`
  display: flex;
  background-image: linear-gradient(
    180deg,
    rgba(109, 114, 120, 0.24) 0%,
    #000000 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
`;

const Tab = styled.li`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 40px;
  padding: 15px 24px;
  border-style: none;
  cursor: pointer;

  ${(props: { selected: boolean }) =>
    props.selected &&
    css`
      border-bottom: #0091ff;
      border-bottom-style: solid;
    `}
`;

const CodeTabs = () => {
  const [selectedSample, setSelectedSample] = useState(codeSamples[0]);

  return (
    <TabContainer>
      <TabNavigation>
        {codeSamples.map((sample) => (
          <Tab
            key={sample.language}
            selected={sample.language === selectedSample.language}
            onClick={() => setSelectedSample(sample)}
          >
            {sample.language}
          </Tab>
        ))}
      </TabNavigation>
      <CodePreview>{selectedSample.sample}</CodePreview>
    </TabContainer>
  );
};

export default CodeTabs;
