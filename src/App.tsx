import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./router/browser.routes";



export function Fallback() {
    return <p>Performing initial data load</p>;
}


export  function App() {
    return <div>
        app component
        <RouterProvider router={router} fallbackElement={<Fallback />} />
    </div>;
}
