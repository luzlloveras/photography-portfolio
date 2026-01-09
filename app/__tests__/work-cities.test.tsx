import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Cities from "../work/cities/page";

// Mock next/image
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className?: string;
  }) => <img src={src} alt={alt} className={className} />,
}));

// Mock next/link
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("Cities Page", () => {
  it("renders the page title", () => {
    render(<Cities />);
    expect(screen.getByText("Cities & Architecture")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Cities />);
    expect(
      screen.getByText(
        "Urban spaces, geometry, and the way people move through them."
      )
    ).toBeInTheDocument();
  });

  it("renders back to work link", () => {
    render(<Cities />);
    const backLink = screen.getByText("← Back to Work");
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest("a")).toHaveAttribute("href", "/work");
  });

  it("renders all photo images", () => {
    render(<Cities />);
    const photos = ["01", "02", "03", "04"];
    photos.forEach((id) => {
      const images = screen.getAllByAltText(`Cities photo ${id}`);
      expect(images.length).toBeGreaterThan(0);
    });
  });

  it("renders photo links with correct hrefs", () => {
    render(<Cities />);
    const photos = ["01", "02", "03", "04"];
    photos.forEach((id) => {
      const link = screen
        .getByAltText(`Cities photo ${id}`)
        .closest("a");
      expect(link).toHaveAttribute("href", `/work/cities/${id}`);
    });
  });
});
