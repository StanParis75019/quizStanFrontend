import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from'react-router-dom';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
import Details from './Screens/Details';
import About from './Components/About';
import DashBoard from './Screens/DashBoard/DashBoard';
import Contact from './Screens/Contact/contact';
import MessageAdmin from './Screens/MessageAdmin';

const router = createBrowserRouter ([
  { path: '/', element: <App></App>},
  { path: '/login', element: <Login></Login>},
  { path: '/register', element: <Register></Register>},
  { path: '/startQuiz', element: <Details></Details>},
  { path: '/about', element: <About></About>},
  { path: '/dashboard', element: <DashBoard></DashBoard>},
  { path: '/contact', element: <Contact></Contact>},
  { path: '/messageAdmin', element: <MessageAdmin></MessageAdmin>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}> </RouterProvider>
  </React.StrictMode>
);


