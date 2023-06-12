import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Signin from "../pages/Home/Signin/Signin";
import Allinstructor from "../pages/Instructor/AllInstructor/Allinstructor";
import InstructorClass from "../pages/Class/InstructorClass/InstructorClass";
import Dashboard from "../layout/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import Error from "../pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signin',
          element: <Signin></Signin>
        },
        {
          path: '/instructor',
          element: <Allinstructor></Allinstructor>
        },
        {
          path: '/class',
          element: <InstructorClass></InstructorClass>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'selectedclass',
          element: <PrivateRoute><MySelectedClass></MySelectedClass></PrivateRoute>
        },
        {
          path: 'manageusers',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'addclass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'payment',
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
          path: 'myclass',
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: 'paymenthistory',
          element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        }
      ]
    },
    {
      path: '/*',
      element: <Error></Error>
    }
  ]);

export default router;