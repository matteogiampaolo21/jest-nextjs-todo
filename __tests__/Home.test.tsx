import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import FindTodo from '@/components/FindTodo';
import Home from '@/app/page';
import DummyData from '@/components/DummyData';
import { act } from 'react-dom/test-utils';

function mockFetch(data: any,isOk:boolean) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: isOk,
      json: () => data,
    }),
  );
}


describe('Home', () => {
    const fakeData = {
        users:[{id:0,firstName:"John",lastName:"Marston"},{id:1,firstName:"Tim",lastName:"Bread"}]
    }
    window.fetch = mockFetch(fakeData,true);
    
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
    test('fetch works', async () => {
      render(<DummyData/>)
      const user = await screen.findAllByRole("listitem");
      expect(user).toHaveLength(2)
    })

    it("displays error when promise is not ok", async () => {
      window.fetch = mockFetch(fakeData,false)
      render(<DummyData/>)
      const errorMsg = await screen.findByRole("heading",{name:"ERROR!!"});
      expect(errorMsg).toBeInTheDocument();
    })

   
})