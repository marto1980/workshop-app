import { render } from "@testing-library/react"

import { setupDelayedUserDataHandlers } from "../test-utils/handlers"
import { server } from "../test-utils/node"
import { UserToggle } from "../user-toggle"

describe("UserToggle", () => {
  beforeAll(() => server.listen())
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test("shows loading component if fetching is delayed", () => {
    setupDelayedUserDataHandlers()
    // Here get... is used as it does not wait for promises to resolve
    const { getByText } = render(<UserToggle />)

    const loadingData = getByText("Data is being loaded!")

    expect(loadingData).toBeInTheDocument
  })
})
