import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomepageView from './views/Homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfilesView from './views/Profiles/ProfilesView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfilesView></ProfilesView>
  },
  {
    path: "/browse",
    element: <HomepageView></HomepageView>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
