import { render } from '@testing-library/react'
import React from 'react'

import { UserToggle } from '../user-toggle'

describe('UserToggle', () => {
    test("Shows error component on fetching error", () => {
        const { getByText } = render(<UserToggle />)

        const userName = getByText('Error loading data!')

        expect(userName).toBeInTheDocument
    })
})