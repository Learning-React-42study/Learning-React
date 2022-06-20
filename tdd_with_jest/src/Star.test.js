import Star from "./Star";
import { render } from "@testing-library/react";

test("matches snapshot", () => {
  const utils = render(<Star />);
  expect(utils.container).toMatchSnapshot();
});

/*test("shows the props correctly", () => {
  const utils = render(<Star />);
  utils.getByText("");
});*/
