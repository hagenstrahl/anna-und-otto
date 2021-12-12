import { render, screen } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
  xtest("renders without crashing", () => {
    render(<App />);
  });
});
