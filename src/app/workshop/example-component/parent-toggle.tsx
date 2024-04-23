import { CorrectParent } from "@/app/experiment/correctParent";
import React, { useState } from "react";

import { ToggleButton } from "./toggle-button";

const ParentToggle = () => {
    const [showParent, setShowParent] = useState(true)

    return <>
        {showParent && <CorrectParent />}
        <br />
        <ToggleButton setter={setShowParent} text={'Toggle Correct Parent'} />
    </>
}

export { ParentToggle };
