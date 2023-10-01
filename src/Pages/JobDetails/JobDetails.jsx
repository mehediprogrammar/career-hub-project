import { useLoaderData, useParams } from "react-router-dom";



const JobDetails = () => {
    
const jobs = useLoaderData()

const {id} = useParams()
const idInt = parseInt(id)
  
 const job = jobs.find(job => job.id === idInt)

 const handleApply = () => {
    const  AddedApplyArray = []

    const ApplyItem = JSON.parse(localStorage.getItem('Apply'))
      
       if(!ApplyItem){
         AddedApplyArray.push(job)
       localStorage.setItem("Apply",JSON.stringify(AddedApplyArray))
       alert('this product added')
       }
       else{
            const isExsite = ApplyItem.find(job => job.id === id)
             if(!isExsite){
                AddedApplyArray.push(...ApplyItem,job)
                localStorage.setItem("Apply",JSON.stringify(AddedApplyArray))
                alert('this product added')
             }     
               else{
                console.log('error alert');
               }
      
       }

 
 
 }


    return (
        <div className="my-24">
             
           <div className="grid gap-5 mt-10  md:grid-cols-4">
               <div className="border p-5  md:col-span-3">
                      <h1><span className="text-2xl my-5 font-normal">jobDescription</span>:{job.job_description}</h1>

                      <h1><span className="text-2xl font-normal">jobResponsibility</span>:{job.job_responsibility}</h1>

                      <h1><span className="text-2xl font-normal">educationalRequirements</span>: <br />
                      {job.educational_requirements}</h1>

                      <h1><span className="text-2xl font-normal">experiences</span>: <br />
                      {job.experiences}</h1>
               </div>
               <div className="border p-5  bg-gray-200">
               <h1 className="text-center text-2xl font-bold underline">Job Details</h1>
                 
               <h1><span className="text-xl font-normal">salary</span>: 
                      {job.salary}</h1>

               <h1><span className="text-xl font-normal">job Title</span>: 
                      {job.job_title}</h1>
                     
                     <div>
                        <h1 className=" text-2xl font-bold underline">Contact Information</h1>

                        <h1><span className="text-xl font-normal">phone</span>: 
                       {job.contact_information.phone}</h1>

                      <h1><span className="text-xl font-normal">email</span>: 
                       {job.contact_information.email}</h1>

                      <h1><span className="text-xl font-normal">address</span>: 
                       {job.contact_information.address}</h1>
                     </div>
                     <div>
                    <button onClick={handleApply} className="btn mt-5 p-3 bg-cyan-500 w-full">Apply Now</button>
                 </div>
               </div>
                
           </div>
        </div>
    );
};

export default JobDetails;