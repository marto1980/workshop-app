import { render, waitForElementToBeRemoved } from '@testing-library/react'
import React from 'react'
//import {mutate} from 'swr'

import { UserToggle } from '../user-toggle'
import { setupUserDataHandlers, setupFailedUserDataHandlers } from '../test-utils/handlers'
import { server } from '../test-utils/node';


describe('UserToggle', () => {
    beforeAll(() => server.listen());
    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close());

    test("shows error component on fetching error", async () => {
        setupFailedUserDataHandlers()
        const { findByText } = render(<UserToggle />)


        const userName = await findByText('Error loading data!')

        expect(userName).toBeInTheDocument
    })

    test("shows user data on fetching success", async () => {
        setupUserDataHandlers()
        const { findByText } = render(<UserToggle />)

        const userName = await findByText('User name: Test User')
        
        expect(userName).toBeInTheDocument
    })
})