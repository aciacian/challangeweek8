import { screen, render } from "@testing-library/react";
import Nav from "./nav";

it("should be render nav text", () => {
    render(<Nav/>);
    const navtext = screen.getByText("Testimonial");
    expect(navtext).toBeInTheDocument();

})