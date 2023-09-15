import { RouterProvider } from "react-router-dom";
import { router } from "./router/browser.routes";
import styles from './App.less'

console.log(styles['App-header'])

export function Fallback() {
    return <p>Performing initial data load</p>;
}


export function App() {
    return <div className={ styles.App }>
        app component
        <RouterProvider router={ router } fallbackElement={ <Fallback/> }/>
    </div>;
}
