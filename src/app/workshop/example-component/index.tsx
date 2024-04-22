'use client'

import useSWR from 'swr'

import { Loading } from './loading';
import { Error } from './error';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ExampleComponent = () => {
    const { data, error, isLoading } = useSWR('http://localhost:3001/user-data', fetcher)
    if (error) return <Error />
    if (isLoading) return <Loading />
    const { name, address } = data


    return <div>
        <p>User name: {name}</p>
        <p>User address: {address}</p>
    </div>
}

export { ExampleComponent }