import { useContext } from "react";
import { ContactHistoryContext } from "../context/ContactHistoryContext";
import callIMG from '../assets/images/call.png';
import videoIMG from '../assets/images/video.png';
import textIMG from '../assets/images/text.png';


const Timeline = () => {

const {callLog, setCallLog, videoLog, setVideoLog,textLog, setTextLog} = useContext(ContactHistoryContext)
console.log(callLog, setCallLog, videoLog, setVideoLog,textLog, setTextLog,'Access context data:')

    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-6xl font-bold mb-15'>Timeline</h2>
            <div className="card bg-base-100 shadow border border-slate-300">
            <div className="card-body space-y-3">
              <h2 className="card-title text-[#244d3f]">Interaction History</h2>
        
              <div>
                    
                  {
                    callLog.map((call,ind) => {
                        return (
                            <div key={ind}
                            className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-2"
                            >
                             <img src={callIMG} alt="Dialer Image" className="h-[30px] w-auto "/>
                             <h2 className="font-semibold text-md text-[#64748b]"><span className="font-semibold text-xl text-black">Call </span>with {call.name}</h2>   
                             <div className="flex flex-col items-center">

                             <p>Calling local time</p>
                             </div>
                            </div> 
                               

                        )
                    })
                  }
                </div>
             
                <div>
                    
                    <div>
                    
                    {
                      textLog.map((text,ind) => {
                          return (
                              <div key={ind}
                              className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-2"
                              >
                               <img src={textIMG} alt="Dialer Image" className="h-[30px] w-auto "/>
                               <h2 className="font-semibold text-md text-[#64748b]"><span className="font-semibold text-xl text-black">Text </span>with {text.name}</h2>   
                               <div className="flex flex-col items-center">
  
                               <p>Text local time</p>
                               </div>
                              </div> 
                                 
  
                          )
                      })
                    }
                  </div>
                </div>
              
                <div>
                    
                    <div>
                    
                    {
                      videoLog.map((videoCall,ind) => {
                          return (
                              <div key={ind}
                              className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-2"
                              >
                               <img src={videoIMG} alt="Dialer Image" className="h-[30px] w-auto "/>
                               <h2 className="font-semibold text-md text-[#64748b]"><span className="font-semibold text-xl text-black">Video </span>with {videoCall.name}</h2>   
                               <div className="flex flex-col items-center">
  
                               <p>Video Call local time</p>
                               </div>
                              </div> 
                                 
  
                          )
                      })
                    }
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Timeline;