import { Dispatch, SetStateAction } from "react"

interface ToggleButtonProps {
  setter: Dispatch<SetStateAction<boolean>>
  text?: string
}

const ToggleButton = ({ setter, text }: ToggleButtonProps) => {
  const toggle = () => {
    setter((prev) => !prev)
  }

  const defaultText = "Toggle Button"

  return (
    <button type="button" onClick={toggle}>
      {text ?? defaultText}
    </button>
  )
}

export { ToggleButton }
