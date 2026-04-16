

/* Get All data from Local DB */
const getAllCallInfoFromLocalDB = () => {
    const allCallerList = localStorage.getItem("Call List")
   
    if(allCallerList) return JSON.parse(allCallerList);

    return [];
}


const addCallInfoToLocalDB = (callerInfo) => {
    const allCallerInfo = getAllCallInfoFromLocalDB();

    const isAlreadyExitCallerInfo = allCallerInfo.find((callInfo) => callInfo.id === callerInfo.id);
    console.log(isAlreadyExitCallerInfo);

    if(!isAlreadyExitCallerInfo) {
   
        allCallerInfo.push(callerInfo);
        localStorage.setItem("Call List",JSON.stringify(allCallerInfo));
    }


};


export {getAllCallInfoFromLocalDB, addCallInfoToLocalDB}