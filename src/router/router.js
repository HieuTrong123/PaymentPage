import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import PaymentPage from '../pages/PaymentPage/PaymentPage';
const Router = createBrowserRouter([
    {
        path: "/",
        element: <PaymentPage />,
    },
]);

export default Router;