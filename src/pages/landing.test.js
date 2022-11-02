import { screen, render } from "@testing-library/react";
import Landing from "./landing"

it("should be render selamat datang", () => {
    render(<Landing/>);
    const welcome = screen.getByText("Selamat datang");
    expect(welcome).toBeInTheDocument();

})

