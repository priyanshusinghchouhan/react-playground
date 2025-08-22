import { useState, useEffect } from "react";

function useOnlineStatus(){
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function handleOnline(){
            setIsOnline(true);
        }

        function handleOffline(){
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () =>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, [])

    return isOnline;
}


function StatusComponent(){
    const isOnline = useOnlineStatus();

    return(
        <>
        {isOnline ? "✅ You are Online" : "❌ You are Offline"}
        </>
    )
}

export default StatusComponent;