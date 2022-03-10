import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { useSession } from "next-auth/client";
import { SigninButton } from ".";

jest.mock("next-auth/client");

describe("SigninButton component", () => {
  it("renders correctly", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValue([null, false]);

    render(<SigninButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValue([
      {
        user: { name: "Jon Snow", email: "jon@email.com" },
        expires: "fake-expires",
      },
      false,
    ]);

    render(<SigninButton />);

    expect(screen.getByText("Jon Snow")).toBeInTheDocument();
  });
});
