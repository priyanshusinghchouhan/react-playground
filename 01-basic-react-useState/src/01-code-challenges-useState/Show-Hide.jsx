import { useState } from "react";


function ToggleMessage({initialMessage}){
    const [visibility, setVisibility] = useState(initialMessage);

    return(
        <div>
            <h1>The message is: {visibility? "Visible":"Not Visible"}</h1>
            <button onClick={() => setVisibility(!visibility)}>Toggle</button>
        </div>
    )
}

export default ToggleMessage;