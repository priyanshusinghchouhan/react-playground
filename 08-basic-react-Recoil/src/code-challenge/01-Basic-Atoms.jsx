import { useState } from "react";
import { useRecoilValue } from "recoil";
import { jobsAtom, messageAtom, networkAtom, totalNotificationSelector } from "./01-basic-atom";

function TopBar(){
    const networkAtomCount = useRecoilValue(networkAtom);
    const messageAtomCount = useRecoilValue(messageAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);

    const totalAtomCount = useRecoilValue(totalNotificationSelector);
     

    return(
        <>
        <button style={{marginRight: "20px"}} >Home</button>

        <button style={{marginRight: "20px"}} >My Network ( {networkAtomCount >= 100 ? "99+" : networkAtomCount} )</button>
        <button style={{marginRight: "20px"}} >Jobs ( {jobsAtomCount} )</button>
        <button style={{marginRight: "20px"}} >Messaging ( {messageAtomCount} )</button>

        <button>Me ({ totalAtomCount })</button>
        </>
    )
}


export default TopBar;