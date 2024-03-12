import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from "@/app/page";

describe('Home', () => {
    it("should have 'Docs' in text", () => {
        render(<Home/>);
        const specificText = screen.getByText("Docs");
        expect(specificText).toBeInTheDocument();
    })
})