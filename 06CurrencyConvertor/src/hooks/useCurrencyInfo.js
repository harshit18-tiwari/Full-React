//we will make custom hooks here 
//custom hooks can use the built-in hooks also

import { useEffect, useState } from "react";


    //yeh hook data return krega joki api s aayega toh hmm useEffect use krenge 
    //iske andhar automatically fetch hoo jayega


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;