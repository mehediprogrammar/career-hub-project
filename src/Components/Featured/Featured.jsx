import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

 


const Featured = () => {
    
     const [jobs, setJobs] = useState([])
     const [dataLength, setDataLength] = useState(false)

      useEffect(() =>{
        fetch('jobs.json')
        .then(rse => rse.json())
        .then(data => setJobs(data))

      },[])

    return (
        <div>
              <div className="my-24">
              <h2 className="text-3xl font-bold text-[#1A1919 ] text-center">Featured Jobs  </h2>
             <p className="my-5 text-[#1A1919 ] text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

              </div>

              <div className=" grid grid-cols-2 gap-6 px-5">
                 {
                   dataLength ? jobs.map(job => <Jobs key={job.id} job={job}></Jobs>) :
                   jobs.slice(0,4).map(job => <Jobs key={job.id} job={job}></Jobs>)
                 }
              </div>
              <button onClick={() => setDataLength(!dataLength) } className=" px-5 block mx-auto rounded-sm font-medium bg-[#7E90FE] mt-6 py-3">See All Jobs</button>
        </div>
    );
};

export default Featured;