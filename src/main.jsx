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
import Blogs from './components/Blogs/Blogs';
import Statistics from './components/Statistics/Statistics';
import ErrorRoute from './components/ErrorRoute/ErrorRoute';


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader:() => fetch('/jobcirculars.json'),
        },
        {
          path: 'jobdetails/:id',
          element: <JobDetails></JobDetails>,
          
        },
        {
          path: 'appliedjobs',
          element: <AppliedJobs></AppliedJobs>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path:'statistics',
          element: <Statistics></Statistics>
        },
        {
          path:"*",
           element: <ErrorRoute></ErrorRoute>
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
