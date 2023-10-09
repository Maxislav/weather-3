import { Link, NavLink, Outlet } from "react-router-dom";import styles from './layout.less'import { ForecastListComponentConnect } from "../forecast-list/forecast-list.component";export function Layout() {    return (        <>            <ForecastListComponentConnect></ForecastListComponentConnect>            <nav className={styles.nav}>                <ul>                    <li >                        <NavLink to="/" className={({ isActive, isPending }) =>                            isPending ? "pending" : isActive ? "active" : ""                        }>Home</NavLink>                    </li>                    <li>                        <Link to="/todos">Todos</Link>                    </li>                    <li>                        <Link to="/deferred">Deferred</Link>                    </li>                    <li>                        <Link to="/404">404 Link</Link>                    </li>                </ul>            </nav>            <Outlet />        </>    )}