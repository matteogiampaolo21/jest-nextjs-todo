import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import FindTodo from '@/components/FindTodo';
import Home from '@/app/page';

describe('Home', () => {
    it("should have specific button and input in Home Page", () => {
        render(<FindTodo/>);
        const specificButton = screen.getByRole("link",{name:"Find List"});
        const specificInput = screen.getByPlaceholderText("Search for a list!");
        expect(specificInput).toBeInTheDocument();
        expect(specificButton).toBeInTheDocument();
    })
    it("should contain a paragraph in Home page", () => {
        render(<Home/>);
        screen.getByText((content) => 
            content.startsWith("Lorem ipsum")
        )
    })
})