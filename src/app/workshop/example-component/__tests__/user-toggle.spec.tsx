import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import {
  setupFailedUserDataHandlers,
  setupUserDataHandlers,
} from "../test-utils/handlers"
import { server } from "../test-utils/node"
import { UserToggle } from "../user-toggle"

describe("UserToggle", () => {
  beforeAll(() => server.listen())
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test("shows error component on fetching error", async () => {
    setupFailedUserDataHandlers()
    const { findByText } = render(<UserToggle />)

    const errorLoadingData = await findByText("Error loading data!")

    expect(errorLoadingData).toBeInTheDocument
  })

  test("shows user data on fetching success", async () => {
    setupUserDataHandlers()
    const { findByText } = render(<UserToggle />)

    const userName = await findByText("User name: Test User")

    expect(userName).toBeInTheDocument
  })

  test("shows loading info on clicking toggle state button", async () => {
    setupUserDataHandlers()
    const user = userEvent.setup()

    const { findByText, findByRole } = render(<UserToggle />)

    const userName = await findByText("User name: Test User")
    expect(userName).toBeInTheDocument

    const button = await findByRole("button")
    await user.click(button)
    const loadingText = await findByText("Data is being loaded!")
    expect(loadingText).toBeInTheDocument
  })
})
