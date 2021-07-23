import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={{code: {hex: ""},
    color: "",
    id: 0}}/>);
});
  
test("Renders the color passed into component", () => {
    // Arrange
    render(<Color color={{code: {hex: ""},
    color: "testcolor",
    id: 0}}/>);
    // Act
    let testColor = screen.getByText("testcolor"); // should return <span> with text of "testcolor"
   // Assert
    expect(testColor).toHaveTextContent("testcolor"); // this is not a good test; but all I couuld get to work

});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    // Arrange
    const mockDeleteColor = jest.fn();
    const mockToggleEdit = jest.fn();
    render(<Color color={{code: {hex: ""},
    color: "",
    id: 0}} deleteColor={mockDeleteColor} toggleEdit={mockToggleEdit}/>);
    let deleteOnClick = screen.getByText("x");
    // Act
    userEvent.click(deleteOnClick);
    // Assert
    expect(mockDeleteColor.mock.calls.length).toBe(1);
    expect(mockToggleEdit.mock.calls.length).toBe(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
        // Arrange
        const mockSetEditColor = jest.fn();
        const mockToggleEdit = jest.fn();
        render(<Color color={{code: {hex: ""},
        color: "",
        id: 0}} setEditColor={mockSetEditColor} toggleEdit={mockToggleEdit}/>);
        let editColorSpan = screen.getByTestId("color");
        // Act
        userEvent.click(editColorSpan);
        // Assert
        expect(mockSetEditColor.mock.calls.length).toBe(1);
        expect(mockToggleEdit.mock.calls.length).toBe(1);
});