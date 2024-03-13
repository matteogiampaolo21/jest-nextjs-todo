import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import CustomTodo, { capStr } from '@/components/CustomTodo';
import { useRouter } from 'next/router';



describe('Custom Todo', () => {
    it("Should if function capitalizes string", () => {
        expect(capStr("hello")).toBe("Hello")
        expect(capStr("10")).toBe("10")
        expect(capStr("Hello")).toBe("Hello")
    })
})