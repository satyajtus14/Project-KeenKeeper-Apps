import React from 'react';
import { ContactHistoryContext } from './ContactHistoryContext';
import { useState } from 'react';



const ContactHistoryProvider = ({children}) => {
    const [callLog, setCallLog] = useState([])
    const [videoLog,setVideoLog] = useState([])
    const [textLog,setTextLog] = useState([])


    const data = {
        callLog,
        setCallLog,
        videoLog,
        setVideoLog,
        textLog,
        setTextLog
    }

    return (
        <ContactHistoryContext.Provider value={data}>
          {children}
        </ContactHistoryContext.Provider>
            
        
    );
};

export default ContactHistoryProvider;