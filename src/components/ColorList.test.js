import React from 'react';
import { findAllByTestId, render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const testColors = [
    {code: {hex: "#f0f8ff"},
    color: "aliceblue",
    id: 6},
    {code: {hex: "#99ddbc"},
    color: "limegreen",
    id: 7},
    {code: {hex: "#00ffff"},
    color: "aqua",
    id: 8}
];

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColors} />)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    // Arrange
    const { rerender } = render(<ColorList colors={testColors} editing={true} />)

    // Act
    const editColorTitle = screen.getByText(/edit color/i)
    const colorNameLabel = screen.getByText(/color name/i);
    const hexCodeLabel = screen.getByText(/hex code/i);

    // Assert edit elements appear
    expect(editColorTitle).toBeInTheDocument();
    expect(hexCodeLabel).toBeInTheDocument();
    expect(colorNameLabel).toBeInTheDocument();

    // Arrange - rerender with editing false
    rerender(<ColorList colors={testColors} editing={false} />);
 
    // Assert edit elements no longer appear
    expect(editColorTitle).not.toBeInTheDocument();
    expect(hexCodeLabel).not.toBeInTheDocument();
    expect(colorNameLabel).not.toBeInTheDocument();


});
