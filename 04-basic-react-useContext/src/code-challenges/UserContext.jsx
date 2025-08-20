import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({children}){
    const [user, setUser] = useState("Priyanshu");

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}


function Profile(){
    const {user, setUser} = useContext(UserContext);

    return(
        <>
        <h2>Hi, My name is {user}</h2>
        <button onClick={() => setUser(u => (u === "Cubarsi" ? "Pedri" : "Cubarsi"))}>Change</button>
        </>
    )
}



export {UserProvider, Profile} 