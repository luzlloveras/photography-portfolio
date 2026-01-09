import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PageShell from "../page-shell";

describe("PageShell", () => {
  it("renders the header with brand name", () => {
    render(<PageShell>Test content</PageShell>);
    expect(screen.getByText("LUZ LLOVERAS")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<PageShell>Test content</PageShell>);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(<PageShell>Test content</PageShell>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders footer with current year", () => {
    render(<PageShell>Test content</PageShell>);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear}`)).toBeInTheDocument();
  });

  it("has correct link hrefs", () => {
    render(<PageShell>Test content</PageShell>);
    const homeLink = screen.getByText("Home").closest("a");
    const aboutLink = screen.getByText("About").closest("a");
    const workLink = screen.getByText("Work").closest("a");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(workLink).toHaveAttribute("href", "/work");
  });
});
