'use client'

const ExampleComponent = () => {
    const userData = {
        id: 'a-fancy-user-id',
        name: 'John Smith',
        address: 'Lorem Ipsum 12'
    } // fetch userData 
    const { name, address } = userData
    return <div>
        <p>User name: {name}</p>
        <p>User address: {address}</p>
    </div>
}

export { ExampleComponent }