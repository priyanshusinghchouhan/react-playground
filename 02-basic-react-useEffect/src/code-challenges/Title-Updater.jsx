import { useState, useEffect } from "react";


function TitleUpdater(){
    const [title, setTitle] = useState("");

    useEffect(() =>{
        document.title = title || "Default Title";
    }, [title]);


    return(
        <div>
            <h2>Type to change the page title:</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
    )
}

export default TitleUpdater;