import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import People from "../work/people/page";

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

describe("People Page", () => {
  it("renders the page title", () => {
    render(<People />);
    expect(screen.getByText("People in Motion")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<People />);
    expect(
      screen.getByText(
        "Spontaneous moments, gestures, and everyday interactions."
      )
    ).toBeInTheDocument();
  });

  it("renders back to work link", () => {
    render(<People />);
    const backLink = screen.getByText("← Back to Work");
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest("a")).toHaveAttribute("href", "/work");
  });

  it("renders all photo images", () => {
    render(<People />);
    const photos = ["01", "02", "03", "04"];
    photos.forEach((id) => {
      const images = screen.getAllByAltText(`People photo ${id}`);
      expect(images.length).toBeGreaterThan(0);
    });
  });

  it("photo 01 has object-top class for top alignment", () => {
    const { container } = render(<People />);
    const photo01Image = container.querySelector('img[alt="People photo 01"]');
    expect(photo01Image).toBeInTheDocument();
    expect(photo01Image).toHaveClass("object-top");
  });
});
