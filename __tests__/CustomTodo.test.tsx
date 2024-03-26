import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import CustomTodo, { capStr } from '@/components/CustomTodo';




describe('Custom Todo', () => {
    it("Should if function capitalizes string", () => {
        expect(capStr("hello")).toBe("Hello")
        expect(capStr("10")).toBe("10")
        expect(capStr("Hello")).toBe("Hello")
    })

    it("Should have route name on page", () => {
        render(<CustomTodo routeID={'fruits'} />);

        const routeName = screen.getByRole("heading",{name:"Fruits Todo List"});

        expect(routeName).toBeInTheDocument();
    })

    it("Should add item to item list", () => {
        

        render(<CustomTodo routeID={"fruits"}/>);
        const addBtn = screen.getByText("Add");

        fireEvent.click(addBtn);
        
        const listLength = screen.getByText("Current items in list : 1")
        expect(listLength).toBeInTheDocument()

    })
    
    it("Should remove item to item list", () => {
        

        render(<CustomTodo routeID={"randomlist"}/>);
        
        const addBtn = screen.getByText("Add");
        fireEvent.click(addBtn);
        
        const removeBtn = screen.getAllByText("Remove");
        fireEvent.click(removeBtn[0]);

        
        const listLength = screen.getByText("Current items in list : 0");
        expect(listLength).toBeInTheDocument()

    })
})