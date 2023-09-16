import { RouterProvider } from "react-router-dom";
import { router } from "./router/browser.routes";
import styles from './app.less'
import { ForecastListComponent } from "./components/forecast-list/forecast-list.component";


export function Fallback() {
    return <p>Performing initial data load</p>;
}


export function App() {
    return <div className={ styles.app }>
        <ForecastListComponent></ForecastListComponent>
        <RouterProvider router={ router } fallbackElement={ <Fallback/> }/>
    </div>;
}
