import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Jobs = ({job}) => {

 
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information,phone,email,address} = job;

    return (
        <div>
           <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 h-24 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white   mt-6 ">
    <img
      src={logo}
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {job_title}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    {company_name}
    </p>
      <div className="mt-4" >
        <button className="px-5 py-2 text-[#7E90FE]  font-bold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
        <button  className="px-5 py-2 text-[#7E90FE] font-bold border rounded border-[#7E90FE] mr-4">{job_type}</button>
      </div>
        
      <div className="flex gap-6">

       <div className="flex gap-2 mt-5">
         <h2 className=" text-3xl"><MdLocationOn></MdLocationOn> </h2>
         <h2 className=" text-2xl font-semibold " >{location}</h2>
       </div>

       <div className="flex gap-2 mt-5">
         <h2 className=" text-3xl"><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar></h2>
         <h2 className=" text-2xl font-semibold " >{salary}</h2>
       </div>

       
  </div>
     
  </div>


    
  <div className="p-6 pt-0">
    <Link to={`/jobs/${id}`}>
    <button 
      className="select-none rounded-lg bg-[#7E90FE] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
     View Details
    </button>
    
    </Link>
  </div>
  
</div>


        </div>
    );
};

export default Jobs;