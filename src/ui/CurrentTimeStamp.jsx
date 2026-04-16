import React from 'react';

const CurrentTimeStamp = () => {
    const currentTime = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })

                  // const currentTime = new Date().toLocaleDateString("en-US", {
                  //   month: "long",
                  //   day: "numeric",
                  //   year: "numeric",
                  // });
                  
    return currentTime;
};

export default CurrentTimeStamp;