import React, { useEffect } from 'react';

import { useState } from 'react';
import { getAllCallInfoFromLocalDB } from '../utils/LocalDB';
import { ContactHistoryContext } from './ContactHistoryContext';



const ContactHistoryProvider = ({children}) => {
    const [callLog, setCallLog] = useState([])
    const [videoLog,setVideoLog] = useState([])
    const [textLog,setTextLog] = useState([])
    const [sortingType, setSortingType] = useState("")


/* This useEffect Hook for store data in the local DB */
   useEffect (() => {
    getAllCallInfoFromLocalDB();

   },[]);

    const data = {
        callLog,
        setCallLog,
        videoLog,
        setVideoLog,
        textLog,
        setTextLog,
        sortingType,
        setSortingType
    }

    return (
        <ContactHistoryContext.Provider value={data}>
          {children}
        </ContactHistoryContext.Provider>
            
        
    );
};

export default ContactHistoryProvider;