import React, { useState } from "react"

import { CorrectParent } from "../../experiment/correctParent"
import { ToggleButton } from "./toggle-button"

const ParentToggle = () => {
  const [showParent, setShowParent] = useState(true)

  return (
    <>
      {showParent && <CorrectParent />}
      <br />
      <ToggleButton setter={setShowParent} text={"Toggle Correct Parent"} />
    </>
  )
}

export { ParentToggle }
