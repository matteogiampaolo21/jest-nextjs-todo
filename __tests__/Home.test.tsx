import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import FindTodo from '@/components/FindTodo';

describe('Home', () => {
    it("should have specific button and input in Home Page", () => {
        render(<FindTodo/>);
        const specificButton = screen.getByRole("link",{name:"Find List"});
        const specificInput = screen.getByPlaceholderText("Search for a list!");
        expect(specificInput).toBeInTheDocument();
        expect(specificButton).toBeInTheDocument();
    })
})