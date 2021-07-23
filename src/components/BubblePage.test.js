import React from 'react';
import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';
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
test("Renders without errors", ()=> {
    render(<BubblePage />)  
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    const mockGetColors = jest.fn(() => { return (testColors) });
    render(<ColorList colors={mockGetColors()} />);

    await waitFor(()=>{
        const colorsReturned = screen.getAllByTestId(/color/i);
        expect(colorsReturned).toHaveLength(3);
    })
});