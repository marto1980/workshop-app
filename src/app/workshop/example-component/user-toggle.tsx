import React, { useState } from "react"
import useSWR from "swr"

import { Error } from "./error"
import { Loading } from "./loading"
import { ToggleButton } from "./toggle-button"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface UserData {
  id: string
  name: string
  address: string
}

const User = ({ data }: { data: UserData }) => {
  const { name, address } = data

  return (
    <>
      <p>User name: {name}</p>
      <p>User address: {address}</p>
    </>
  )
}

const UserToggle = () => {
  const swrFetched = useSWR("http://localhost:3001/user-data", fetcher)
  const { data, error, isLoading } = swrFetched

  const [fakeIsLoading, setFakeIsLoading] = useState(false)

  if (error) return <Error />

  const realIsLoading = isLoading || data === undefined
  const showLoading = realIsLoading || fakeIsLoading

  return (
    <>
      {showLoading ? <Loading /> : <User data={data} />}
      <br />
      <ToggleButton setter={setFakeIsLoading} text={"Toggle User State"} />
    </>
  )
}

export { UserToggle }
