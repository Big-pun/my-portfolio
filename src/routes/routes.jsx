import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";

const myRoutes = createBrowserRouter([
    {
        path: "/my-portfolio/",
        element: <App />,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/my-portfolio/about",
                element: <About />,
            },
            {
                path: "/my-portfolio/work",
                element: <Work />,
            },
            {
                path: "/my-portfolio/contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    }
]);

export default myRoutes;