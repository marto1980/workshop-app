import { render } from '@testing-library/react'
import React from 'react'

import { setupFailedUserDataHandlers, setupUserDataHandlers } from '../test-utils/handlers'
import { server } from '../test-utils/node'
import { UserToggle } from '../user-toggle'

describe('UserToggle', () => {
    beforeAll(() => server.listen())
    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close());

    test('shows error component on fetching error', async () => {
        setupFailedUserDataHandlers()
        const { findByText } = render(<UserToggle />)

        const errorLoadingData = await findByText('Error loading data!')

        expect(errorLoadingData).toBeInTheDocument
    })

    test('shows user data on fetching success', async () => {
        setupUserDataHandlers()
        const { findByText } = render(<UserToggle />)

        const userName = await findByText('User name: Test User')

        expect(userName).toBeInTheDocument
    })
    
})
