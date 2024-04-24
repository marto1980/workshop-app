import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { ParentToggle } from '../parent-toggle'

describe('ParentToggle', () => {
    test('initialises with the rendered counter of zero', () => {
        const { getByText } = render(<ParentToggle />)
        const counter = getByText('0')
        expect(counter).toBeInTheDocument
    })

    test('increments the counter by one on clicking the counter button', async () => {
        const user = userEvent.setup()
        const { getByText, getByRole, queryByText } = render(<ParentToggle />)
        const counter = getByText('0')
        expect(counter).toBeInTheDocument

        const counterButton = getByRole('button', { name: '0' })
        await user.click(counterButton)

        expect(getByText('1')).toBeInTheDocument
        expect(queryByText('0')).not.toBeInTheDocument

    })

    test('toggles the counter on clicking the Toggle Correct Parent button', async () => {
        const user = userEvent.setup()
        const { getByText, getByRole, queryByText } = render(<ParentToggle />)
        const child = getByText('Child')
        expect(child).toBeInTheDocument

        const toggleParentButton = getByRole('button', { name: 'Toggle Correct Parent' })
        await user.click(toggleParentButton)
        expect(queryByText('Child')).not.toBeInTheDocument

        await user.click(toggleParentButton)
        expect(getByText('Child')).toBeInTheDocument
    })

    test('resets the counter on toggling', async () => {
        const user = userEvent.setup()
        const { getByText, getByRole, queryByText } = render(<ParentToggle />)

        const counterButton = getByRole('button', { name: '0' })
        await user.click(counterButton)
        expect(getByText('1')).toBeInTheDocument
        expect(queryByText('0')).not.toBeInTheDocument

        const toggleParentButton = getByRole('button', { name: 'Toggle Correct Parent' })
        await user.click(toggleParentButton)
        expect(queryByText('Child')).not.toBeInTheDocument

        await user.click(toggleParentButton)
        expect(getByText('Child')).toBeInTheDocument
        expect(getByText('0')).toBeInTheDocument
        expect(queryByText('1')).not.toBeInTheDocument
    })


})