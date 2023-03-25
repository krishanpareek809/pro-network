import { cleanup, render, } from "@testing-library/react";
import UserDetails from "../UserDetails";

afterEach(cleanup);

it("should show Username in User Details section", () => {
    const { getByTestId } = render(<UserDetails />);
    const userName = getByTestId("user-name");
    expect(userName).toBeTruthy();
});

it("should show user email in User Details section", () => {
    const { getByTestId } = render(<UserDetails />);
    const userEmail = getByTestId("user-email");
    expect(userEmail).toBeTruthy();
});