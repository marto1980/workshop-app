'use client'

import { CorrectParent } from '@/app/experiment/correctParent';
import { UserToggle } from './user-toggle';
import { ParentToggle } from './parent-toggle';

const ExampleComponent = () => {
    return <div>
        <UserToggle />
        <br />
        <br />
        <ParentToggle />
    </div>
}

export { ExampleComponent };
