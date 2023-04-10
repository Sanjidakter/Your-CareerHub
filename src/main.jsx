import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Main from './components/Layout/Main';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader:() => fetch('jobcirculars.json')
        },
        {
          path: 'jobdetails/:jobId',
          element: <JobDetails></JobDetails>,
          loader:({params}) => fetch('jobcirculars.json?i=${params.jobId}')
        },
        {
          path: 'appliedjobs',
          element: <AppliedJobs></AppliedJobs>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
