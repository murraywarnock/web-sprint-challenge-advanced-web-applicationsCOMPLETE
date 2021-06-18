import React from 'react';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={[
        {code: {hex: "#f0f8ff"},
        color: "aliceblue",
        id: 6},
        {code: {hex: "#99ddbc"},
        color: "limegreen",
        id: 7},
        {code: {hex: "#00ffff"},
        color: "aqua",
        id: 8}
    ]} />)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
});
