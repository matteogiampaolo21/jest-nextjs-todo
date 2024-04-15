import {fireEvent, render, screen} from '@testing-library/react';
import user from "@testing-library/user-event"
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

    // it("Should remove item to item list", () => {
        

    //     render(<CustomTodo routeID={"randomlist"}/>);
        
    //     const addBtn = screen.getByRole("button",{name:"Add"});
    //     fireEvent.click(addBtn);
    //     fireEvent.click(addBtn);
        
    //     const removeBtn = screen.getByRole("button",{name:"Remove"});
    //     fireEvent.click(removeBtn);

        
    //     const listLength = screen.getByText("Current items in list : 0");
    //     expect(listLength).toBeInTheDocument()

    // })
  
    it("Should add and show item in list", async () => {
        user.setup()
        render(<CustomTodo routeID={"testing-jest"}/>)
        const inputBox = screen.getByRole("textbox");
        const addBtn = screen.getByRole('button', {name: /add/i})

        const testText = "Test the add feature"

        await user.type(inputBox,testText);
        expect(inputBox).toHaveValue(testText);

        await user.click(addBtn)
        expect(inputBox).toHaveValue("");
        
        const item = screen.getByRole('heading', {name: testText})

        expect(item).toBeInTheDocument();
        
    })

})