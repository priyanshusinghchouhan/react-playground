import { useState, useEffect } from "react";


function BankData(){
    const [exchangeData, setExchangeData] = useState({});
    const [bankData, setBankData] = useState({});
    console.log("hi re-render");

    useEffect(() => {
        setTimeout(() => {
            setBankData({income: 1000})
        }, 3000);


        setTimeout(() => {
            setExchangeData({returns: 100})
        }, 1000);
    },[])


    const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

    return(
        <>
        <h1>Hi there, your income tax return are {incomeTax}</h1>
        </>
    )
}


export default BankData;