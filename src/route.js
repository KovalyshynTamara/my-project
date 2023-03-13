import {  createBrowserRouter } from "react-router-dom";
import App from "./App";
// import About from './pages/About';
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Solutions from "./pages/Solutions";
import OurTeam from "./pages/OurTeam";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

import { devHome,prodHome } from "./config";

const router = createBrowserRouter([
    
    {
        path: window.location.hostname === 'location' ? devHome : prodHome,
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "solutions",
                element: <Solutions/>,
            },
            {
                path: "services",
                element: <Services/>,
            },
                        {
                path: "about",
                element: <AboutUs/>,
            },
            {
                path: "blog",
                element: <Blog/>,
            },
                        {
                path: "contacts",
                element: <Contacts/>,
            },
            {
                path: "team",
                element: <OurTeam/>,
            },
            
        ]
    },
    {
        path: "*",
        element: <NotFound/>,
    },

  
]);

export default router