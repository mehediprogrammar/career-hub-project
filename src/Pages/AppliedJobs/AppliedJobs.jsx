import { useEffect, useState } from "react";
import JobDetails from "../JobDetails/JobDetails";



const AppliedJobs = () => {
    
    const [Applieds, setApplied] = useState([])
    const [onFound, setOnFound] = useState(false)


    useEffect(()=>{
        const ApplyItem = JSON.parse(localStorage.getItem('Apply'))

        if(!ApplyItem){
            setApplied(ApplyItem)
        }else{
            setOnFound('no data found')
        }

    },[])
  
  

    return (
        <div>
              onFound ? <p>{onFound}</p> : <div> 
                <div>
                     {
                        Applieds.map(apply => <JobDetails key={apply.id} apply={apply}></JobDetails>)
                     }
                </div>
              </div>
        </div>
    );
};

export default AppliedJobs;