import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { jobsAtom, messageAtom, networkAtom } from "./03-useSetRecoilState";

function UseSetRecoilState(){
    const networkAtomCount = useRecoilValue(networkAtom);
    const messageAtomCount = useRecoilValue(messageAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    
    return(
        <>
        <button style={{marginRight: "20px"}} >Home</button>
        <button style={{marginRight: "20px"}} >My Network ( {networkAtomCount >= 100 ? "99+" : networkAtomCount} )</button>
        <button style={{marginRight: "20px"}} >Jobs ( {jobsAtomCount >= 100 ? "99+" : jobsAtomCount} )</button>
        <button style={{marginRight: "20px"}} >Messaging ( {messageAtomCount >= 100 ? "99+" : messageAtomCount} )</button>
        <button style={{marginRight: "20px"}}>Me</button>

        <ButtonUpdater />
        </>
    )
}


function ButtonUpdater(){
    const setJobsAtomCount = useSetRecoilState(jobsAtom);

    return(
        <>
        <button onClick={() => setJobsAtomCount( c => c + 1)} >Increase Jobs Count</button>
        </>
    )
    
    
}

export default UseSetRecoilState;