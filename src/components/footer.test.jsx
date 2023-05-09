import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
test("check if all elements show in the footer", async () => {
  render(<Footer />);
  expect(await screen.findAllByRole("heading")).toHaveLength(3); //check for three headings in the document
  expect(await screen.findAllByRole("link")).toHaveLength(4); //check for four links in the document data
  expect(screen.getByText("Jack Brogan")).toBeInTheDocument(); //check elements are in the doc
  expect(screen.getByText("Web Designer and Developer")).toBeInTheDocument();
  expect(screen.getByText("Wigan, Greater Manchester")).toBeInTheDocument();
  expect(screen.getByText("07866361559")).toBeInTheDocument();
});
