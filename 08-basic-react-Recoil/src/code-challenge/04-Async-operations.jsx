import { useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalnotificationSelector } from "./04-async-oprs";
import { useEffect } from "react";
import  axios  from "axios";

function MainApp(){
    const [networkCount, setNetworkCount] = useRecoilState(notifications);
    const totalNotificationCount = useRecoilValue(totalnotificationSelector);

    return(
        <>
        <button style={{marginRight: "20px"}} >Home</button>

        <button style={{marginRight: "20px"}} >My Network ( {networkCount.network >= 100 ? "99+" : networkCount.network} )</button>
        <button style={{marginRight: "20px"}} >Jobs ( {networkCount.jobs} )</button>
        <button style={{marginRight: "20px"}} >Messaging ( {networkCount.messaging} )</button>
        <button style={{marginRight: "20px"}} >Notifications ( {networkCount.notifications} )</button>

        <button>Me ({ totalNotificationCount })</button>
        </>
    )
}


export default MainApp;