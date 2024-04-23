import { render } from '@testing-library/react'
import { UserToggle } from '../user-toggle'
import React from 'react'

describe('UserToggle', () => {
    test("displays user name", () => {
        const { getByText } = render(<UserToggle />)
        const userName = getByText('John Smith')

        expect(userName).toBeInTheDocument()
    })
})