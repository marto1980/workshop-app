"use client"

import { ParentToggle } from "./parent-toggle"
import { UserToggle } from "./user-toggle"

const ExampleComponent = () => {
  return (
    <div>
      <UserToggle />
      <br />
      <br />
      <ParentToggle />
    </div>
  )
}

export { ExampleComponent }
