import { useEffect, useState } from "react";

const useData = () => {
    const [allDatas, setAllDatas] = useState([]);
    console.log(allDatas);

    useEffect(() => {
        fetch('https://wolves-server.vercel.app/instructor')
        .then(res => res.json())
        .then(data => setAllDatas(data))
    },[])
    
    return [allDatas]
}
export default useData; 