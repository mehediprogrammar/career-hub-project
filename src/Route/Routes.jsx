import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blog from "../Pages/Blog/Blog";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Statistics from "../Pages/Statistics/Statistics";

const myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/appliedJobs",
                element:<AppliedJobs></AppliedJobs>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/jobs/:id",
                element:<JobDetails></JobDetails>,
                loader:() => fetch('../jobs.json')
                
            }
        ]
    }
])

export default myRoutes;