import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createGlobalStyle } from "styled-components";

import Home from "./components/Home";
import SpaceshipDetails from "./components/spaceshipSection/SpaceshipDetails";
import Header from "./components/header/Header";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * (60 * 1000),
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<SpaceshipDetails />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Inter&display=swap");

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 100;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    --color-text: hsl(0, 0%, 100%);
    --color-background: hsl(0, 0%, 0%);
    --color-primary: hsl(60, 100%, 50%);
    --color-secondary: hsl(22, 100%, 50%);
    --color-accent: hsl(200, 100%, 50%);
    --color-border: hsl(0, 0%, 80%);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    color-scheme: light dark;
    background-color: var(--color-background);
    color: var(--color-text);
  }
`;
