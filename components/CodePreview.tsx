import { createRef, useEffect, ReactNode } from "react";
import hljs from "highlight.js";
import styled from "@emotion/styled";

type Props = {
  children: ReactNode;
};

const CodeSample = styled.code`
  font-family: "Ubuntu Mono", monospace;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 18px;
  background-color: #000000;
  padding: 15px 24px;
`;

const CodePreview = ({ children }: Props) => {
  const codeRef = createRef<HTMLElement>();
  const highlightCode = () => {
    codeRef.current && hljs.highlightBlock(codeRef.current);
  };
  useEffect(() => {
    highlightCode();
  }, [children]);

  return (
    <pre>
      <CodeSample ref={codeRef}>{children}</CodeSample>
    </pre>
  );
};

export default CodePreview;
