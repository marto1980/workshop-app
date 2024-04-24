import { delay, http, HttpResponse } from 'msw'

import { server } from './node'

const userDataHandlers = [
    http.get(
        'http://localhost:3001/user-data',
        // The function below is a "resolver" function.
        // It accepts a bunch of information about the
        // intercepted request, and decides how to handle it.
        (info) => {
            return HttpResponse.json({
                id: 'test-user-id',
                name: "Test User",
                address: "Test address, 123 Narnia"
            })
        },
    ),
]

const failedUserDataHandlers = [
    http.get(
        'http://localhost:3001/user-data',
        (info) => {
            return new HttpResponse(null, {
                status: 404,
                statusText: 'Server error!',
            })
        },
    )
]

const delayedUserDataHandlers = [
    http.get(
        'http://localhost:3001/user-data',
        // The function below is a "resolver" function.
        // It accepts a bunch of information about the
        // intercepted request, and decides how to handle it.
        async (info) => {
            await delay(100000)
            return HttpResponse.json({
                id: 'test-user-id',
                name: "Test User",
                address: "Test address, 123 Narnia"
            })
        },
    ),
]

const wrongPathUserDataHandlers = [
    http.get(
        'http://localhost:3001/a-wrong-path',
        (info) => {
            return HttpResponse.json({
                id: 'test-user-id',
                name: "Test User",
                address: "Test address, 123 Narnia"
            })
        },
    ),
]

const setupUserDataHandlers = () => {
    server.use(...userDataHandlers)
}

const setupFailedUserDataHandlers = () => {
    server.use(...failedUserDataHandlers)
}

const setupDelayedUserDataHandlers = () => {
    server.use(...delayedUserDataHandlers)
}

const setupWrongPathUserDataHandlers = () => {
    server.use(...wrongPathUserDataHandlers)
}


export { setupDelayedUserDataHandlers, setupFailedUserDataHandlers, setupUserDataHandlers, setupWrongPathUserDataHandlers }

