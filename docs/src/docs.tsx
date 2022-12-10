import React from "react";
import ReactDOM from "react-dom";
import { MessageList, MessageData, Theme } from "../../src/index.js";
import styled from "styled-components";

const StyledMessageList = styled(MessageList)`
  border-radius: 8px;
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

const Pane = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  
  @media screen and (min-width: 1024px) {
    flex: 0 0 50%;
    padding: 64px;
  }

  ${StyledMessageList} {
    width: 100%;
  }
`;

const DarkModePane = styled(Pane)`
  background-color: #2f3136;
`;

const LightModePane = styled(Pane)`
  background-color: #f2f3f5;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    min-height: 100%;
    flex-direction: row;
  }
`;

function createTestData(theme: Theme): MessageData[] {
  return [
    {
      content: "I love slickz",
      author: {
        id: "0",
        username: "itzMofr",
        discriminator: "0001",
      },
    },
    {
      content: `I also love SlickZ`,
      author: {
        id: "0",
        username: "itzJv_",
        discriminator: "0001",
      },
    },
    {
      content: `SlickZ is W`,
      author: {
        id: "1",
        username: "itzMofr",
        discriminator: "0002",
      },
    },
    {
      content: "**sLICkz** *is* __a__ ~~gay~~. `god`. ",
      author: {
        id: "0",
        username: "itzMofr",
        discriminator: "0001",
      },
    },
  ];
}

const darkModeExamples = createTestData("dark");
const lightModeExamples = createTestData("light");

function App() {
  return <StyledApp>
    <DarkModePane>
      <StyledMessageList messages={darkModeExamples} theme="dark" />
    </DarkModePane>
    <LightModePane>
      <StyledMessageList messages={lightModeExamples} theme="light" />
    </LightModePane>
  </StyledApp>;
}

ReactDOM.render(<App />, document.getElementById("root"));
