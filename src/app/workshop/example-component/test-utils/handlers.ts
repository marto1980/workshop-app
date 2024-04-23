import { http, HttpResponse } from 'msw'

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
            },
            )

        },
    ),
]

const failedUserDataHandlers = [
    http.get(
        'http://localhost:3001/user-data',
        (info) => {
            return new HttpResponse(null, {
                status: 404,
                statusText: 'Out Of Apples',
            })
        },
    )
]

const setupUserDataHandlers = () => {
    server.use(...userDataHandlers)
}

const setupFailedUserDataHandlers = () => {
    server.use(...failedUserDataHandlers)
}

export { setupFailedUserDataHandlers, setupUserDataHandlers }
