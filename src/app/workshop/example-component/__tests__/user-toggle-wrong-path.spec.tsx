import { render } from "@testing-library/react"
import React from "react"

import { setupWrongPathUserDataHandlers } from "../test-utils/handlers"
import { server } from "../test-utils/node"
import { UserToggle } from "../user-toggle"

describe("UserToggle", () => {
  beforeAll(() =>
    server.listen({
      onUnhandledRequest: ({ method, url }) => {
        throw new Error(`Unhandled ${method} request to ${url}`)
      },
    }),
  )
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test("sends a correct http request", async () => {
    setupWrongPathUserDataHandlers()
    const { findByText } = render(<UserToggle />)

    const userName = await findByText("Error loading data!")

    expect(userName).toBeInTheDocument
  })
})
