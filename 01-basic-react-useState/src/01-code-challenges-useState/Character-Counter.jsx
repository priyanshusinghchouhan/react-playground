import { useState } from "react";

function Characters({initialCharacters}){
    const [characters, setCharacters] = useState(initialCharacters);

    return(
        <div>
            <label htmlFor="text">You have typed {characters} characters</label>
            <input type="text"  onChange={(e) => setCharacters(e.target.value.length)}/>
        </div>
    )

};


export default Characters;