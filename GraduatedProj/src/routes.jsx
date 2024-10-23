import {createBrowserRouter} from "react-router-dom";
import Home from './components/web/home/Home.jsx';
import WebLayout from './components/web/WebLayout.jsx';
import Login from "./components/web/login/Login.jsx";
import StudentForm from "./components/web/StudentForm/StudentForm.jsx";
import ManagerForm from "./components/web/ManegerForm/ManagerForm.jsx";
import SchoolForm from "./components/web/ManegerForm/SchoolForm.jsx";
import SideMenu from "./components/web/Sidemenu/Sidemenu.jsx";
import Admin from "./components/web/admin/Admin.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <WebLayout/>,
      children:[
        {
          path:"home",
          element: <Home/>
        },
        {
          path:"*",
          element:<p className="m-0">Not Found Page</p>
        }
      ]
    },
    {
      path:"/Login",
      element:<Login/>
    },
    {
      path:"/StudentForm",
      element:<StudentForm/>
    },
    {
      path:"/ManagerForm",
      element:<ManagerForm/>
    },
    {
      path:"/SchoolForm",
      element:<SchoolForm/>
    },
    {
      path:"/Admin",
      element:<Admin/>
    },
    // {
    //   path:"/Sidemenu",
    //   element:<SideMenu/>
    // }
  ]);
  