import { useState } from "react";
import { useRecoilState } from "recoil";
import { jobsAtom, messageAtom, networkAtom } from "./02-userecoilstate";

function UseRecoilState(){
    const [networkAtomCount, setNetworkAtomCount] = useRecoilState(networkAtom);
    const [messageAtomCount, setMessageAtomCount] = useRecoilState(messageAtom);
    const [jobsAtomCount, setJobsAtomCount] = useRecoilState(jobsAtom);
    
    function handleJob(){
        setJobsAtomCount( j => j + 1);
    }

    function handleMessage(){
        setMessageAtomCount( m => m + 1);
    }

    function handleNetwork(){
        setNetworkAtomCount( h => h + 1)
    }
    return(
        <>
        <button style={{marginRight: "20px"}} >Home</button>
        <button style={{marginRight: "20px"}} onClick={handleNetwork}>My Network ( {networkAtomCount >= 100 ? "99+" : networkAtomCount} )</button>
        <button style={{marginRight: "20px"}} onClick={handleJob}>Jobs ( {jobsAtomCount} )</button>
        <button style={{marginRight: "20px"}} onClick={handleMessage}>Messaging ( {messageAtomCount} )</button>
        <button>Me</button>
        </>
    )
}

export default UseRecoilState;