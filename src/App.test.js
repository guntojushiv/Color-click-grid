import { render } from "@testing-library/react";
import App from "./App";

test("renders Grid component without crashing", () => {
  render(<App />);
});
